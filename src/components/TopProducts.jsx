import React from 'react'
import Img1 from '../assets/shirt/shirt.png'
import Img2 from '../assets/shirt/shirt2.png'
import Img3 from '../assets/shirt/shirt3.png'
import { FaStar } from "react-icons/fa6";



const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
      "Camisa de mujer elegante y versátil, en color blanco clásico, ideal para cualquier ocasión formal o casual. Comodidad asegurada.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
      "Camisa de mujer con rayas verticales azules y blancas, corte moderno y ajuste perfecto. Estilo fresco y sofisticado.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
      "Camisa de mujer veraniega con estampado floral vibrante, tela ligera y transpirable. Perfecta para días soleados y relajados.",
    },
  ];

const TopProducts = () => {
  return (
    <>
        
        <div className=' pb-40 lg:mt-[-60px]'>
        <div className=' pt-20 text-left ml-10'>
                <p className='text-primary font-semibold text-[20px]' data-aos="fade-up">Top Rated Products for you</p>
                <h1 className='font-bold text-5xl' data-aos="fade-up">Best Products</h1>
                <p className='font-semibold text-gray-400 mt-2 mb-[100px] text-xl' data-aos="fade-up">Descubre nuestros best products: los favoritos de la web, calidad insuperable.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-1 place-items-center'>
            {ProductsData.map((data) => ((
                <div className= 'bg-white dark:bg-gray-800 hover:bg-black/70 rounded-2xl max-w-[300px] dark:hover:bg-primary hover:text-white relative shadow-xl duration-200 group ' key={data.id} data-aos="zoom-in">
                    <div className='h-[100px]'>
                        <img src={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-200 drop-shadow-md'/>
                    </div>
                    <div className='p-4 text-center'>
                        <div className='flex justify-center items-center gap-1 '>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-xl'>{data.title}</h1>
                            <p className='truncate text-gray-500 group-hover:text-white'>{data.description}</p>
                            <button className='group-hover:bg-white p-2  bg-primary transition-all duration-200 text-white m-4 py-2 px-4 rounded-full gap-3 hover:scale-105 group-hover:text-primary text-center cursor-pointer'>Order Now</button>
                        </div>
                    </div>
                </div>
            )))}
            </div>
        </div>







    </>
  )
}

export default TopProducts