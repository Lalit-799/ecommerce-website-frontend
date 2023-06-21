'use client'
import React, { useState } from 'react'
import ProductDetailsCarousel from './ProductDetailsCarousel';
import Wrapper from './Wrapper';
import RelatedProducts from './RelatedProducts';
import { getDiscountedPricePercentage } from '@/utils/discount';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '@/store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ProductDetails = ({product,products}) => {
   // below useState is for to store selected size
   const [selectedSize, setSelectedSize] = useState();
   // below state for to shoe error
   const [showError, setShowError] = useState(false);
   const dispatch = useDispatch();
 const p = product?.data?.[0]?.attributes;

 const notify = () => {
    toast.success("successfully added to cart!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

  return (
    <>
         <div className="w-full md:py-20">
         <ToastContainer/>
        <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
             <ProductDetailsCarousel images={p?.image?.data}/>               
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
           {/* product tittle */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>
           {/* product subTittle */}
            <div className="text-lg font-semibold mb-4">
            {p.subtitle}
            </div>
            
          {/* PRODUCT PRICE */}
          <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;{p.price}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;{p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>
              {/* now below we ging to make size section or product size range start */}
              <div className="mb-10">
              {/* HEADING START */}
                <div className="flex justify-between mb-2">
                   <div className="text-md font-semibold"> Select Size</div>
                 
                </div>
              {/* HEADING END*/}
                {/* size start */}
                <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        } ${
                                            selectedSize === item.size
                                                ? "border-black"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                   Size selection is required 
                                    
                                </div>
                            )}
                           
                               

                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document
                                        .getElementById("sizesGrid")
                                        .scrollIntoView({
                                            block: "center",
                                            behavior: "smooth",
                                        });
                                } 
                                else {
                                    dispatch(
                                        addToCart({
                                            ...product?.data?.[0],
                                            selectedSize,
                                            oneQuantityPrice: p.price,
                                        })
                                    );
                                   notify();
                                } 
                            }}
                        >
                            Add to Cart
                        </button>
              {/* add to cart button end */}
             
              {/*product details start*/}
              <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            {/* in below div markdown class is written in global css */}
                            <div className="markdown text-md mb-5">
                            {/* reactMarkDown is a react library to give element markdown */}
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </div>
                        </div>
              {/*product details end*/}
            </div>
            
            {/* right column end */}
        </div>
           <RelatedProducts products={products}/>
        </Wrapper>
    </div>
    </>
  )
}

export default ProductDetails;