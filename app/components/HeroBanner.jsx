'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Oswald, Urbanist } from 'next/font/google'
 
const oswald = Oswald({ subsets: ['latin'],variable:'--font-Oswald' })
const urbanist = Urbanist({ subsets: ['latin'],variable:'--font-Urbanist' })

 

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">

        <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false}
         renderArrowPrev={(clickHandler,hasPrev)=>(
            <div className="hidden">
            </div>
         )}
         renderArrowNext={(clickHandler,hasNext)=>(
            <div className="hidden">
            </div>
         )}
        >
        <div>
         <img src="/slide_1.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                   
        </div>
        <div>
         <img src="/slide_2.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                   
        </div>
        <div>
         <img src="/slide-3.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                 
        </div>
        <div>
         <img src="/slide_4.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                 
        </div>
                
        </Carousel>
    </div>
  )
}

export default HeroBanner