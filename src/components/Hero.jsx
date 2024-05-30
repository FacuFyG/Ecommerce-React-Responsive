import React from 'react';
import Image1 from '../assets/hero/women.png';
import Image2 from '../assets/hero/shopping.png';
import Image3 from '../assets/hero/sale.png';
import Slider from 'react-slick';

    const ImageList = [
        {
            id: 1,
            img: Image1,
            title: "Upto 50% off on all Men's Wear",
            description:
              "Descubre nuestra colección primavera-verano: prendas frescas, colores vibrantes y diseños únicos que te harán destacar en cada ocasión.",
          },
          {
            id: 2,
            img: Image2,
            title: "30% off on all Women's Wear",
            description:
              "Ropa sostenible y de calidad: confeccionada con materiales ecológicos, ofreciendo comodidad y estilo sin comprometer el planeta ni tu bolsillo.",
          },
          {
            id: 3,
            img: Image3,
            title: "70% off on all Products Sale",
            description:
              "Aprovecha nuestras ofertas: disfruta de hasta un 70% de descuento en ropa de temporada. Estilo y calidad a precios increíbles.",
          },
    ];


const Hero = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };


  return (
    <>
      <div className='relative overflow-hidden min-h-0[550px] bg-gray-100 sm:min-h-[730px] flex justify-center dark:bg-gray-950 duration-200'>
        <div className='w-[700px] h-[700px] rounded-[25px] bg-orange-200 absolute -top-1/2 right-0 rotate-45 drop-shadow-md dark:bg-primary/40 opacity-90'>
        </div>
        
        <div className='container pb-8 sm:pb-0 sm:mt-[120px]'>
          <Slider {...settings}>
              {ImageList.map((data) => (
                <div className='flex'>
                <div className='grid grid-cols-1 sm:grid-cols-2 dark:text-white'>
                  {/* {text content section} */}
                  <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold sm:mt-[120px]' data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true">
                      {data.title}
                    </h1>
                    <p className='text-sm sm:text-[20px] leading-7' 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true">
                      {data.description}
                      </p>
                    <button className='p-2 bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white m-4 py-2 px-4 rounded-full flex items-center gap-3 hover:scale-105 max-w-[7em]' 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    >Order Now
                    </button>
                  </div>
                  <div className='order-1 sm:order-2'>
                    <div data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true">
                    <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto' />
                    </div>
                </div>
                </div>
                
              </div>
              ))}
          </Slider>
        </div>
      </div>

        
      
    </>
  )
}

export default Hero

