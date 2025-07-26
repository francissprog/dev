"use client"
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Logo from "@/public/images/plauge.png";
import { LuMouse } from "react-icons/lu";

const Landing = () => {
  // function to scroll to view
  const scroll = (id) => {
    // get the id
    const page = document.getElementById(id);

    // validate the id
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col lg:flex-row gap-10 h-screen" id="home">
      <Navbar scroll={scroll} />
      {/* main content */}
      <section className="flex flex-1 justify-center items-center px-4 lg:px-0">
        <div>
          {/* pfp */}
          <div className='flex flex-col justify-center items-center text-center gap-7'>
            <Image src={Logo} alt='pfp'  height={500}/>
            <span className='text-4xl lg:text-[70px] font-bold'>FRANCISS-PROG</span>
            <p className='text-xl lg:text-3xl'>Frontend Developer</p>
          </div>
        </div>
      </section>
      {/* Scroll button */}
     
      <button
         className="absolute left-1/2 bottom-10 text-3xl transform -translate-x-1/2 tooltip"
         onClick={() => scroll("about")}
       >
         <LuMouse />
         <span className="tooltiptext">Scroll down</span>
       </button>
     
    </main>
  );
};

export default Landing;
