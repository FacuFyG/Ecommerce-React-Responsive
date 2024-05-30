import React from 'react'
import Slider from 'react-slick';




const TestimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "La calidad de la ropa es excepcional. Compré varias camisetas y todas mantienen su forma y color después de varios lavados. Seguiré comprando aquí!",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Satya Nadella",
      text: "Encontré exactamente lo que buscaba: ropa cómoda y a la moda. La camisa que compré es perfecta para el trabajo y también para salir por la noche.¡Muy recomendable!",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Virat Kohli",
      text: "Esta tienda se ha convertido en mi lugar favorito para comprar ropa. La atención al detalle y la calidad de los materiales son insuperables.",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Sachin Tendulkar",
      text: "Estoy encantada con la blusa veraniega que compré. El diseño es precioso y la tela es ligera y cómoda, perfecta para el clima cálido.",
      img: "https://picsum.photos/103/103",
    },
  ];



const Testimonials = () => {
  
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  
  
  
    return (
    <>
        
        <div className='pb-10'>
            {/* Title/text section */}
            <div className='flex flex-col items-center mt-20 pb-20' data-aos='fade-up'>
                <p className='text-primary text-xl font-semibold pb-2'>What our customers are saying</p>
                <h1 className='text-4xl font-bold dark:text-white text-dark pb-2 '>Testimonials</h1>
                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptates.</p>
            </div>

            <div className='' data-aos='zoom-in'>
              <Slider {...settings} className='space-x-4'>
                    {TestimonialData.map((data)=>(
                        <div className='my-6 relative'>
                            <div className='flex flex-col shadow-xl py-8 px-6 mx-4 rounded-xl  mb-20 bg-primary/10  dark:bg-gray-800 h-[300px] ml-4' key={data.id}>
                                <div>
                                <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                                </div>
                                <div>
                                    <p className='mt-4 mb-6 dark:text-white'>{data.text}</p>
                                    <h1 className='text-right text-xl font-bold'>{data.name}</h1>
                                </div> 
                            </div>
                            <p className='absolute right-0 -top-10 text-black/20 text-9xl font-serif pr-10'>,,</p>
                        </div>
                    ))}
              </Slider>

            </div>
        </div>
    
    </>
  )
}

export default Testimonials