const ShopifyBuy = require('shopify-buy');
const client = ShopifyBuy.buildClient({
  domain: "hustlersheaven.myshopify.com",
  storefrontAccessToken: "c9716e8fc531f96eadb76bd4c498484d"
});

async function getProduct(productId){
  return await client.product.fetch(productId)
}

async function getAllProducts(){
  return await client.product.fetchAll()
}

async function getCollections(){
  return await client.collection.fetchAll()
}

async function getCollectionProducts(id){
  return await client.collection.fetchWithProducts(id, {productsFirst: 250})
}

async function checkout(userDetails){
  let lineItemsToAdd = []
  for(let key in cart){
      lineItemsToAdd.push({
          variant_id: cart[key].variants[0].id.split('gid://shopify/ProductVariant/')[1],
          quantity: cart[key].q
      })
  }
    let raw = JSON.stringify({
      "order": {
        "test": true,
        "financial_status": "pending",
        "phone": userDetails.phone,
        "email": userDetails["email-address"],
        "shipping_address": {
          "first_name": userDetails["first-name"],
          "last_name": userDetails["last-name"],
          "address1": userDetails.address,
          "address2": userDetails.apartment,
          "phone": userDetails.phone,
          "city": userDetails.city,
          "province": userDetails.region,
          "country": userDetails.country,
          "zip": userDetails["postal-code"]
        },
        "buyer_accepts_marketing": true,
        "line_items": lineItemsToAdd
      }
  });
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://expressjs-mongoose-production-481d.up.railway.app/orders", requestOptions)
    .then(response => response.json())
    .then(result => {
      window.location.href = result.order.order_status_url
    })
    .catch(error => console.log('error', error));
}
      
function placeOrder(){
  checkout().then(_e=>{
    if(!_e.order.errors){
      currentOrder = _e
      localStorage.currentOrder = JSON.stringify(_e)
      pastOrders.push(_e)
      localStorage.pastOrders = JSON.stringify(pastOrders)
      cart = {}
    }else{
      
    }
  })
}

export {getProduct, getAllProducts, getCollections, getCollectionProducts, checkout, placeOrder}