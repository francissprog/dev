import React from 'react'
import Techstack from './Techstack'

const About = () => {
  return (
    <main id='about' className='h-screen flex justify-center items-center'>
        <div className='max-w-[900px] flex flex-col gap-10'>
            {/* about */}
            <div className='flex flex-col'>
                <span className='text-6xl mb-3'>Hi!, My name is <span className='font-bold'>Francis</span></span>
                <p className='text-3xl text-justify'>I have a passion for building minimalist websites. 
                    When I'm not immersed in web development, you'll 
                    find me enjoying workouts, 
                    coding new projects, or cycling through scenic routes.
                </p>
            </div>

            {/* tech stack */}
            <div className='flex flex-col gap-2'>
                <span className='text-3xl'>Tech Stack:</span>
                <Techstack/>
            </div>

            {/* download cv */}
            <div>
                <button className='border border-1 dark:border-[#F8F8FF] border-[#353839] py-2 px-10 text-lg'>Download CV</button>
            </div>
        </div>
    </main>
  )
}

export default About