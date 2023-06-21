import { Oswald, Urbanist } from 'next/font/google'
 
const oswald = Oswald({ subsets: ['latin'] })
const urbanist = Urbanist({ subsets: ['latin'] })
 
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaEnvelope,FaLinkedin, FaGithub } from 'react-icons/fa';
import Wrapper from "./Wrapper";
import Link from 'next/link';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Contact", url: "/contact" },
    { id: 4, name: "Cart", url: "/cart" },
];
const data_c = [
    { id: 6, name: "Top Wear", url: "/category/top-wear" },
    { id: 7, name: "Bottom Wear", url: "/category/bottom-wear" },
    { id: 8, name: "Foot Wear", url: "/category/foot-wear" },
    { id: 9, name: "Winter Wear", url: "/category/winter-wear" },
];
const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                  

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium text-sm">
                                Categories
                            </div>
                            {data_c.map((item) => {
                                         return(
                                            <Link key={item.id}href={item?.url}>
                                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                                   {item.name}
                                                </div>
                                            </Link>
                                            );
                                       })
                              }
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium text-sm">
                              Pages
                            </div>
                            {data.map((item) => {
                                         return(
                                            <Link key={item.id}href={item?.url}>
                                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                                   {item.name}
                                                </div>
                                            </Link>
                                            );
                                       })
                              }
                             
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                  <a href="mailto:lalit745kumar@gmail.com"><FaEnvelope size={20} /></a>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                    <a href="https://www.linkedin.com/in/lalit-kumar-67294326a"><FaLinkedin size={20} /></a>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                    <a href="https://github.com/Lalit-799"><FaGithub size={20} /></a>
                    </div>
                   
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 ManStyle Mart, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

               
            </Wrapper>
        </footer>
    );
};

export default Footer;