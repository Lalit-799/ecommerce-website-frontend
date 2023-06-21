
import { API_URL, STRAPI_API_TOKEN } from '@/utils/urls'
import HeroBanner from './components/HeroBanner'
import ProductCard from './components/ProductCard'
import Wrapper from './components/Wrapper'
import './globals.css'


// home page
export default async function Home() {
  // data fatching start
  const res = await fetch(`${API_URL}/api/products?populate=*&pagination[pageSize]=45`, {
    headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
  });
  const products = await res.json()
  // console.log(products);
  // data fatching end
  return (
  <div className="bg-slate-200">
   <main> 
     <HeroBanner/>
    <Wrapper>
         <div className="font-oswald text-left text-blue-900 pt-10 pb-0 text-[28px]">Popular Products</div>
        {/* product grid start */}
        {/* we map through product data to form whole grid by passing data to ProductCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 px-5 md:px-0">
        {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
        
        </div>
     {/* product grid end */}

    </Wrapper>
   </main>
  </div>

  );
} 
