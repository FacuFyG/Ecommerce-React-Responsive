import React from 'react'
import Img from '../assets/women/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>

        <div className='grid grid-cols-1 sm:grid-cols-2 pb-10'>
             {/* Banner img */}
            <div className='ml-20 mb-20 ' data-aos="zoom-in" data-aos-duration="600">
                <img src={Img} alt="" className='relative -left-10 sm:max-w-[400px] sm:h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
            </div>
            {/* Text Content */}
            <div className='text-left ml-10 mr-10' data-aos="fade-down">
                <h1 className='text-4xl font-bold'>Winter Sale up to 50% Off</h1>
                <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde hic fugit eius perspiciatis voluptatum.</p>
                <div>
                    <div className='flex items-center gap-4 mt-4' data-aos="fade-up" data-aos-duration="600">
                        <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300 dark:bg-violet-400"/>
                        <p className='font-semibold text-md'>Quality Products</p>
                    </div>
                    <div className='flex items-center gap-4 mt-4' data-aos="fade-up" data-aos-duration="600">
                        <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-400"/>
                        <p className='font-semibold text-md'>Fast Delivery</p>
                    </div>
                    <div className='flex items-center gap-4 mt-4' data-aos="fade-up" data-aos-duration="800">
                        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-400"/>
                        <p className='font-semibold text-md'>Easy Payment Mehtod</p>
                    </div>
                    <div className='flex items-center gap-4 mt-4' data-aos="fade-up" data-aos-duration="900">
                        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-yellow-400"/>
                        <p className='font-semibold text-md'>Get Offers</p>
                    </div>
                    
                </div>
            </div>
        </div>






    </>
  )
}

export default Banner