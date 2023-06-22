'use client'
import { Oswald, Urbanist } from 'next/font/google'
import { useState,useEffect } from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Menu from './Menu'
import MenuMobile from './MenuMobile'
import { fetchDataFromApi } from '@/utils/api'
// icons import for cart favorate and other purpose
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart} from "react-icons/bs";
import {BiMenuAltRight} from "react-icons/bi";
import {VscChromeClose} from "react-icons/vsc";
import { useSelector } from 'react-redux'

const oswald = Oswald({ subsets: ['latin'] })
const urbanist = Urbanist({ subsets: ['latin'] })

const Header = () => {
// below state is used to show menu in mobile
const [mobileMenu, setMobileMenu] = useState(false);
//showCatMenu is used for showing submanu in categaries
const [showCatMenu, setShowCatMenu] = useState(false);
// shoe hook is pass in header className to change change class for apper or disapear the header
const [show, setShow] = useState("translate-y-0");
// below 2 states are used for remove nevbar after certain pixel scroll
const [lastScrollY, setLastScrollY] = useState(0);
// below state is used to store fatched data
const [categories, setCategories] = useState(null);

const { cartItems } = useSelector((state) => state.cart);

  const controlNevbar= () => {
    if(window.scrollY>200){
      if(window.scrollY>lastScrollY && !mobileMenu){
        setShow("-translate-y-[80px]");
      } else{
        setShow("shadow-sm")
      }
    } else{
       setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY)
  };

  useEffect(()=>{
    window.addEventListener("scroll",controlNevbar);
    return ()=>{
      window.removeEventListener("scroll",controlNevbar)
    }
  },[lastScrollY]);
// below hook is used for data fatching and stroing it useState
  useEffect(() => {
    fetchCategories();
}, []);

const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
   
    setCategories(data);
};
  return (
    <header className={`w-full h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 sticky top-0 transition duration-300 ${show}`}>
    {/* wrapper is a template that we design to wrape different element in a particular style */}
    {/* link is for logo*/}
    <Wrapper className="h-[60] flex justify-between items-center">
    <Link href="/">
     <img src="/logo.png" alt="logo" className="w-[40px] md:w-[60px]"/>
    </Link>
    <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}  categories={categories} />
   {/* below is code for mobile menu if screen srink to phone size */}
    {mobileMenu && <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}  categories={categories} />}
      {/* icon start */}
      <div className="flex items-center gap-2 text-black">
   
          <Link href="/cart">
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.1] cursor-pointer relative">
          <BsCart className="text-[15px] md:text-[20px]"/>
          {cartItems.length > 0 && (
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {cartItems.length}
                                </div>
                            )}
        </div>
          </Link>
    
     {/* icon end */}

      {/* mobile icon start */}
      <div className="w-8 md:w-12 h-8 md:h-12  md:hidden rounded-full flex justify-center items-center hover:bg-black/[0.1] cursor-pointer relative -mr-2">
        {mobileMenu?(
          <VscChromeClose className="text-[16px]" onClick={()=>setMobileMenu(false)}/>
        ):(
          <BiMenuAltRight className="text-[20px]" onClick={()=>setMobileMenu(true)}/>
        )}
      </div>  
      {/* mobile icon end */}

    </div>
    </Wrapper>
    </header>
  )
}

export default Header