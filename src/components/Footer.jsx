import React from 'react'
import logo from '../assets/logo.png'
import Banner from '../assets/website/footer-pattern.jpg'


import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";
import { list } from 'postcss';
  
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  
  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];


const Footer = () => {
  return (
    <>
        <div className='min-h-[400px] pt-14 pl-10 ' style={BannerImg}>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-44 pt-5'>
                    <div className='py-8' data-aos="zoom-in">
                        <h1 className='sm:text-5xl font-bold text-xl sm:text-left text-justify mb-3 flex items-center gap-3 text-white'><img src={logo} alt="" className='max-w-[50px]'/>Shopsy</h1>
                        <p className='text-white pt-6'>"Moda para cada ocasión. Síguenos en redes sociales para ofertas y novedades exclusivas."</p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4' data-aos="fade-up" data-aos-duration="400">
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-white'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link)=>(
                                        <li className='cursor-pointer pt-2 text-white hover:text-primary hover:translate-x-2 duration-500'>{link.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4' data-aos="fade-down" data-aos-duration="600">
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-white'>Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link)=>(
                                        <li className='cursor-pointer pt-2 text-white hover:text-primary hover:translate-x-2 duration-500'>{link.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="flex gap-10 mt-7">
                                <a href="#" >
                                    <FaInstagram className='text-4xl text-white hover:text-primary'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-4xl text-white hover:text-primary'/>
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-4xl text-white hover:text-primary'/>
                                </a>
                            </div>
                            <div className='flex flex-col gap-4 mt-7'>
                                <p className='text-white flex items-center gap-3'><FaLocationArrow/>Buenos Aires, Argentina</p>
                                <p className='text-white flex items-center gap-3'><FaMobileAlt/>+45 922155594</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>



    </>
  )
}

export default Footer