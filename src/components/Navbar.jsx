import React from 'react'
import logo from '../assets/logo.png'
import LigthDayBtn from '../assets/website/light-mode-button.png'
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping} from "react-icons/fa6";
import DarkMode from './DarkMode';
import { list } from 'postcss';
import { FaCaretDown } from 'react-icons/fa6';


const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];
  
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

const Navbar = () => {
  return (
    <>
            {/* Upper Nav */}
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='bg-orange-200 px-10 dark:bg-primary/40'>
                <div className='flex flex-row place-content-between p-2  items-center'>
                    <a href="#" className='flex font-bold text-2xl sm:text-3xl gap-2'>
                        <img src={logo} alt="Logo" className=' max-h-[40px] '/>
                        Shopsy
                    </a>
                    <div className=' flex items-center gap-2'>
                        <input type="text" placeholder='search' className='hidden sm:block h-[40px] sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'/>
                        <IoMdSearch className='hidden sm:block text-gray-500 hover:text-primary/100'/>
                        <button onClick={()=> alert("Ordering not available yet")} className='p-2 bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white m-4 py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                        </button>
                        <button>
                            <DarkMode/>
                            </button>
                    </div>
                </div>
            </div>
            {/* Lower Nav */}
            <div>
                <ul className='sm:flex hidden justify-center items-center gap-20'>
                    {
                        Menu.map((data) => (
                            <li key={data.id} className='hover:text-primary transition-all duration-400 font-semibold'>
                                <a href={data.link}>{data.name}</a>
                            </li>
                        ))
                    }
                    <li className='group relative cursor-pointer'>
                        <a href="#" className='flex items-center gap-[2px] py-2 group'>
                            Trending Products
                            <span>
                                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                            </span>
                        </a>
                        <div className='absolute hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black drop-shadow-xl'>
                            <ul className=''>
                                {DropdownLinks.map((data)=> (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-orange-200'>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    
    
    </>
  )
}

export default Navbar