"use client"
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Logo from "@/public/images/plauge.png"
import { LuMouse } from "react-icons/lu";
import scroll from '../functions/scroll';

const Landing = () => {
  return (
    <main className="flex gap-10 h-screen" id="home">
      <Navbar/>
      {/* main content */}
      <section className="flex flex-1 justify-center items-center">
        <div>
            {/* pfp */}
           <div className='flex flex-col justify-center items-center'>
                <Image src={Logo} alt='pfp'/>
                <span className='text-[70px] font-bold'>FRANCISS-PROG</span>
                <p className='text-3xl'>Frontend Developer</p>
           </div>
        </div>
      </section>
      {/* Scroll button */}
      <button className="absolute left-1/2 bottom-10 text-3xl tooltip" 
      onClick={() => scroll("about")}>
        <LuMouse/>
        <span className="tooltiptext">Scroll down</span>
      </button>
    </main>
  );
};

export default Landing;

