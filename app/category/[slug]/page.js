import ProductCard from '@/app/components/ProductCard'
import Wrapper from '@/app/components/Wrapper'
import { API_URL, STRAPI_API_TOKEN } from '@/utils/urls'
 
// below fuction to get static paths
export const dynamicParams = false;

export async function generateStaticParams() {
  const categorys = await fetch(`${API_URL}/api/categories?populate=*`, {
    headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
  }).then((res) => res.json())
 
  return categorys?.data?.map((c) => ({
    slug: c.attributes.slug,
  }))
}

export default async function Category({params:{slug}}){
    
   // data fatching start
  const res = await fetch(`${API_URL}/api/categories?filters[slug][$eq]=${slug}&pagination[start]=0&pagination[limit]=33`, {
    headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
  });
  const category = await res.json();
  const re = await fetch(`${API_URL}/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[start]=0&pagination[limit]=33`, {
    headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
  });
  const products = await re.json()
  // data fatching end
   
  return (
    <div className="w-full md:py-20"> 
    <Wrapper>
    <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
        {category?.data?.[0]?.attributes?.name}
        </div>
    </div>
    {/* product grid start */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-7 px-5 md:px-0">
    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
        
        </div>
    {/* product grid end */}

    </Wrapper>
   
    </div>
  )
};



 