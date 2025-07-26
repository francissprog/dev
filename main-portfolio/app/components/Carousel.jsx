"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import slides from '../json/slides';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Touch swipe functionality
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    carouselRef.current.dataset.touchStartX = touchStartX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = parseFloat(carouselRef.current.dataset.touchStartX);

    if (touchEndX < touchStartX - 50) {
      nextSlide();
    } else if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  };

  return (
    <div
      ref={carouselRef}
      className="relative flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation buttons for desktop view */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-black dark:text-white hidden lg:flex items-center justify-center p-2 rounded-full"
      >
        <FaChevronLeft className="text-6xl lg:text-3xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-black dark:text-white hidden lg:flex items-center justify-center p-2 rounded-full"
      >
        <FaChevronRight className="text-6xl lg:text-3xl" />
      </button>

      <div className="relative w-full max-w-[100vw] h-[400px] flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 translate-x-full'
            }`}
          >
            {index === currentSlide && (
              <div className="bg-transparent border dark:border-white w-[800px] h-auto rounded-3xl p-4 flex flex-col items-center max-w-full">
                <div className="flex flex-col mt-4 gap-4 sm:gap-6">
                  <div className="flex flex-row gap-2 items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <slide.icon className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{slide.title}</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify xl:text-2xl">{slide.description}</p>
                  <div className="flex flex-row gap-3 sm:gap-5 mt-4 items-center">
                    <Link href={slide.demo} className="border px-4 py-2 sm:px-6 sm:py-3 dark:bg-white bg-[#353839] dark:text-[#353839] text-sm sm:text-base" target="_blank">
                      Live Demo
                    </Link>
                    <Link href={slide.source} className="border border-1 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base" target="_blank">
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
