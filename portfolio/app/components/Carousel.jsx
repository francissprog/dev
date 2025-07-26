"use client"
import React, { useState } from 'react';
import { nextSlide, prevSlide } from '../functions/carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import slides from '../json/slides';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex items-center justify-center gap-10 relative">
      {/* Left Button */}
      <button
        onClick={() => setCurrentSlide(prevSlide(currentSlide, slides.length))}
        className="px-4 py-2 rounded-full z-10"
      >
        <FaChevronLeft className="text-3xl" />
      </button>

      {/* Slide Container */}
      <div className="relative w-[800px] max-xl:w-[700px] max-lg:w-[600px] max-md:w-[400px] max-sm:w-[200px] h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col items-center justify-center duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-transparent border dark:border-white w-full h-auto rounded-3xl p-10 flex flex-col items-center">
              <div className="flex flex-col mt-4 gap-10">
                <div className='flex flex-row gap-2 items-center text-6xl'> 
                  <slide.icon/>
                  <span>{slide.title}</span>
                </div>
                <p className='text-2xl'>{slide.description}</p>
                <div className="flex flex-row gap-5 mt-4 items-center">
                  {/* Use Next.js Link component for client-side navigation */}
                  <Link href={slide.demo}  className='border px-7 py-3 dark:bg-white bg-[#353839] dark:text-[#353839]' target='_blank'>
                      Live Demo
                  </Link>
                  <Link href={slide.source} className='border border-1 px-7 py-3' target='_blank' >
                      Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => setCurrentSlide(nextSlide(currentSlide, slides.length))}
        className="px-4 py-2 rounded-full z-10"
      >
        <FaChevronRight className="text-3xl" />
      </button>
    </div>
  );
};

export default Carousel;
