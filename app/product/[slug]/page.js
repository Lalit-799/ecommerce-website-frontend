 import ProductDetails from '@/app/components/ProductDetails';
 import { API_URL, STRAPI_API_TOKEN } from '@/utils/urls'
 import React from 'react'

 // below fuction to get static paths


export async function generateStaticParams() {
  const products = await fetch(`${API_URL}/api/products?populate=*`, {
    headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
  }).then((res) => res.json())
 
  return products?.data?.map((p) => ({
    category: p.attributes.slug,
     
  }))
}



export default async function product({params:{slug}}){
    
     // data fatching start
  const res = await fetch(`${API_URL}/api/products?populate=*&filters[slug][$eq]=${slug}`, {
   headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
 },{next: {revalidate: 20,},});
 const product = await res.json();
 
 const re = await fetch(`${API_URL}/api/products?populate=*&[filters][slug][$ne]=${slug}`, {
   headers: { authorization:'Bearer '+STRAPI_API_TOKEN },
 },{next: {revalidate: 20,},});
 const products = await re.json()
 // data fatching end
  return (
      <ProductDetails product={product} products={products}/>
  )
}

