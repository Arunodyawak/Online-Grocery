import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {

const [showMenu, setShowMenu] = useState(false);

const toggleMenu =() => {

    setShowMenu (!showMenu);
}


  return (
    
   
        <header  className='bg-white fixed top-0 right-0 left-0'>
            <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center'>
                <a href="#" className='text-3xl font-bold'>
                    {/*Logo*/}
                    wanni<span className='text-4xl text-amber-800 uppercase'>A</span>rachchi Gr<span className='text-amber-600 uppercase'>o</span>cify
                </a>
                    {/*desktop Menu*/}
                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li>
                        <a href="#"className='font-semibold tracking-wider  text-orange-500'>Home</a>
                    </li>
                     <li>
                        <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    </li>
                     <li>
                        <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                     <li>
                        <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>

                {/*Nav Action*/}
                <div className='flex items-center gap-x-5'>
                    {/*Input Field*/}
                    <div className='flex p-1 border-2 border-orange-500 rounded-full'>
                        <input type='text' name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 has-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                            <IoMdSearch />
                        </button>
                </div>

                    <a href='#' className='text-zinc-800 text-3xl'>
                        <FaShoppingCart />
                    </a>

                    <a href='#' className='text-zinc-800 text-3xl'>
                        <FaHeart />
                    </a>
                    {/* Hamburger */}
                    <a href='#' className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                       {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </a>
                </div>

                 {/* Mobile menu */}

                  <ul className={`flex flex-col gap-y-12 bg-orange-400/15 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform-translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                    <li>
                        <a href="#"className='font-semibold tracking-wider  text-orange-500'>Home</a>
                    </li>
                     <li>
                        <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    </li>
                     <li>
                        <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                     <li>
                        <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                    
                    <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                        <input type='text' name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 has-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                            <IoMdSearch />
                        </button>
                    </li>

                </ul>


            </nav>
               


        </header>
      
    
  )
}

export default Navbar
