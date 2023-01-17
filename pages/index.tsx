import ProductList from "@/components/productList"
import Hero from "@/components/hero"
export default function Home()
{
  return (
    <>
       <div className="mt-20">
        {/* Home page images */}
        <Hero />
           <ProductList />
          
       </div>
    </>
  )
}