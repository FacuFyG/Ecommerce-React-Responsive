import React from 'react'
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];
  
const Products = () => {
  return (
    <>

        <div className='mb-20'>
            {/* Top cards section */}
            <div className='text-center pt-20'>
                <p className='text-primary font-semibold text-[20px]' data-aos="fade-up">Top Selling Products for you</p>
                <h1 className='font-bold text-5xl' data-aos="fade-up">Products</h1>
                <p className='font-semibold text-gray-400 mt-2 mb-20 text-xl' data-aos="fade-up">Descubre nuestros productos top selling: los favoritos en moda, calidad insuperable.</p>
            </div>
             {/* Cards section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {
                        ProductsData.map((data)=>(
                            <div className='' key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                                <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                                <div>
                                    <h3 className='font-semibold sm:mt-4'>{data.title}</h3>
                                    <p>{data.color}</p>
                                    <div className='flex gap-2 items-center '>
                                        <FaStar className='text-yellow-500'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center mt-10' data-aos="fade-up" data-aos-delay='300'>
              <button className='dark:hover:bg-white dark:hover:text-primary p-2  bg-primary transition-all duration-200 text-white m-4 py-2 px-10 gap-3 hover:scale-105  text-center cursor-pointer text-xl font-semibold rounded-lg'>View All Products</button>
            </div>
        </div>











    </>
  )
}

export default Products