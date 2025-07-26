import React from 'react'
import Carousel from './Carousel'

const Portfolio = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center px-4 lg:px-0" id='portfolio'>
      <span className='text-4xl md:text-5xl mb-10 lg:mb-20'>MY PORTFOLIO</span>
      {/* container */}
      <div className="w-full max-w-[1200px]">
        <Carousel />
      </div>
    </main>
  )
}

export default Portfolio
