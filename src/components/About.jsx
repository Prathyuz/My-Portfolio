import React from 'react'
import Heroimage from '../assets/hero.png'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 data-aos="fade-down" 
                 className='text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    {/* Image Section */}
                    <img data-aos="zoom-in" 
                        src={Heroimage}
                        alt='Hero Image'
                        className='w-24 h-auto mb-8 md:mb-0 md:w-96 md:h-96 rounded-md object-cover transform transition-transform duration-300 hover:scale-105'
                        style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.6)' }
}

                    />

                    {/* Text Section */}
                    <div className='flex-1'>
                        <p data-aos="zoom-in" className='text-lg mb-8 text-gray-400 py-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 '>
                            I am a Passionate Front-End Developer with a focus on building modern and responsive web applications.
                            With a strong foundation in frontend technologies, I strive to create seamless and efficient user experiences.
                        </p>

                        {/* Skill Progress Bars */}
                        <div className='space-y-4'>
                            {/* HTML & CSS */}
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' data-aos="fade-right" className='w-5/12 lg:w-3/12 text-lg font-medium '>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                    <div data-aos="fade-left" className='bg-gradient-to-r from-green-500 to-blue-500 text-white w-full h-full rounded-full '></div>
                                </div>
                            </div>
                            {/* TailwindCSS */}
                            <div className='flex items-center'>
                                <label htmlFor='tailwindcss' data-aos="fade-right" className='w-5/12 lg:w-3/12 text-lg font-medium '>TAILWINDCSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div data-aos="fade-left" className='bg-gradient-to-r from-green-500 to-blue-500 text-white w-9/12 h-full rounded-full'></div>
                                </div>
                            </div>
                            {/* JavaScript */}
                            <div className='flex items-center'>
                                <label htmlFor='javascript' data-aos="fade-right" className='w-5/12 lg:w-3/12 text-lg font-medium '>JAVASCRIPT</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div data-aos="fade-left" className='bg-gradient-to-r from-green-500 to-blue-500 text-white w-11/12 h-full rounded-full'></div>
                                </div>
                            </div>
                            {/* React JS */}
                            <div className='flex items-center'>
                                <label htmlFor='reactjs' data-aos="fade-right" className='w-5/12 lg:w-3/12 text-lg font-medium '>REACT JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div data-aos="fade-left" className='bg-gradient-to-r from-green-500 to-blue-500 text-white w-10/12 h-full rounded-full'></div>
                                </div>
                            </div>
                            {/* WordPress */}
                            <div className='flex items-center'>
                                <label htmlFor='wordpress' data-aos="fade-right" className='w-5/12 lg:w-3/12 text-lg font-medium '>WORDPRESS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div data-aos="fade-left" className='bg-gradient-to-r from-green-500 to-blue-500 text-white w-11/12 h-full rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Skills and Areas of Focus */}
                <div className='py-4 flex flex-col md:flex-row justify-between text-center mt-16'>
                    <div className='md:w-1/3'>
                        <h3 data-aos="fade-up" className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            Web Development
                        </h3>
                        <p data-aos="fade-up" className='font-semibold p-1'>Building responsive websites.</p>
                    </div>

                    <div className='md:w-1/3 mt-8 md:mt-0'>
                        <h3 data-aos="fade-up" className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            Learning & Growth
                        </h3>
                        <p data-aos="fade-up" className='font-semibold p-1'>Exploring new web technologies.</p>
                    </div>

                    <div className='md:w-1/3 mt-8 md:mt-0'>
                        <h3 data-aos="fade-up" className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            UI/UX Design
                        </h3>
                        <p data-aos="fade-up" className='font-semibold p-1'>Creating seamless user experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
