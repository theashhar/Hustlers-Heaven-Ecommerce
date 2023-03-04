import { getAllProducts } from "@/utils/shopify"
import { useEffect, useState } from "react"

export default function ProductList() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
      getAllProducts().then(products => setProducts(products))
    },[])
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">New Arrivals</h2>
  
          <div className="mt-8 grid grid-cols-2 gap-y-12 gap-x-3 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.variants[0].image.src}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                    <p className="mt-1 text-sm text-gray-500m line-clamp-1">{product.description}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">₹ {product.variants[0].price.amount}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={`/product?id=`+product.id.split("gid://shopify/Product/")[1]}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  