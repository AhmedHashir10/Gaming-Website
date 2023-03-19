import Image from "next/image";
import im from '../public/hero_adobe_express.svg'
import logo from '../public/logo.svg'
import pc from '../public/icons/pc.svg'
import ps from '../public/icons/ps.svg'
import xbox from '../public/icons/xbox.svg'
import React, { useState } from 'react';
import Heronine from '../public/heropics/sce-hero-960.jpg'
import Herotwe from '../public/heropics/sce-hero-1200.jpg'


// const [image, setImg] = useState()
const imae = im

export default function HeroSection() {
  return <section>
    <div className="relative w-screen h-screen">
      <Image
        className='cursor-pointer object-cover h-full w-full'
        src={imae}
        alt='/'
      
      />
      <div className="absolute flex flex-col  text-2.25 text-yellow-500 top-56 left-56 space-y-4">
        <div style={{ marginRight: '20px' }}>
          <Image
            className='cursor-pointer object-cover h-full w-full'
            src={logo}
            alt='/'
          />
        </div>
        <div style={{ marginTop: '10px' }} className="flex flex-row pd-5 justify-center ">
          <Image
            className='cursor-pointer object-cover w-6 filter-invert mr-2 '
            src={pc}
            alt='/' />
          <Image
            className='cursor-pointer object-cover w-6 mr-2'
            src={pc}
            alt='/' />
          <Image
            className='cursor-pointer object-cover w-6 mr-2'
            src={pc}
            alt='/' />
        </div>
        <div className="text-3xl  flex justify-center text-shadow " >AVAILABLE
        </div>
        <div className=" text-3xl  flex justify-center " >
          03.07.2023
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="border-2 border-white ">
            <div className="h-14  px-8 text-white  bg-[#f5f5f5] bg-opacity-30   flex justify-center items-center hover:bg-[#f5f5f5] hover:text-black duration-100 hover:opacity-100">
              <div>Watch Trailer</div>
            </div>
          </div>
          <div className="h-14 w-fit px-4 text-white flex justify-center items-center  bg-red-600  hover:bg-blue-400 duration-200">
            <div>Buy Now</div>
          </div>
        </div>
      </div>

    </div>
  </section>
}