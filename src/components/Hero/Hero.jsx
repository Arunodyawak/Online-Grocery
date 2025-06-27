import React from 'react'
import Grocey from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => 
    {
  return (
    <section>
        <div className='bg-white min-h-screen max-w-[1400px] mx-auto px-10 flex items-center'>
            {/* Hero Content */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-400 text-lg px-5 py-2 rounded-full'>Export Best Quality ...</span>
                <h1 className='text-7xl/20 font-bold mt-4'>
                    Tasty Organic <span className='text-orange-400'>Fruits</span> & <span className='text-orange-400'>Vegetables</span> <br/> In Your City
                </h1>
                <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-10'>
                    Bred for a high content of beneficial substance. Our products are all fresh and healthy.  
                </p>
                <Button content ="Shop Now"/>
            </div>
            {/* Hero Image */}
            <div className='flex-1'>
                <img src={Grocey} alt="Hero Image" />
            </div>    
        </div>
    </section>
  )
}

export default Hero
