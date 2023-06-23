 import ProductDetails from '@/app/components/ProductDetails';
 import { API_URL, STRAPI_API_TOKEN } from '@/utils/urls'
 import React from 'react'

 // below fuction to get static paths

 export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await fetch(`${API_URL}/api/products?populate=*`, {
    headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
  }).then((res) => res.json())
 
  return products?.data?.map((p) => ({
    slug: p.attributes.slug,
     
  }))
}



export default async function Product({params:{slug}}){
    
     // data fatching start
  const res = await fetch(`${API_URL}/api/products?populate=*&filters[slug][$eq]=${slug}`, {
   headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
 });
 const product = await res.json();
 
 const re = await fetch(`${API_URL}/api/products?populate=*&[filters][slug][$ne]=${slug}&pagination[pageSize]=33`, {
   headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
 });
 const products = await re.json()
 // data fatching end
  return (
      <ProductDetails product={product} products={products}/>
  )
}

