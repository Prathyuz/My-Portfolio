import React from 'react';
import Heroimage from '../assets/herooo.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='bg-black text-white lg:py-16 px-8' id='Home'>
            {/* Flex container for image and content */}
            <div className='lg:px-60 lg:ml-32 lg:pt-10 container flex flex-col-reverse md:flex-row  items-center justify-between'>
                {/* Content (Text) */}
                <div className='text-center md:text-left md:w-1/2'>
                    {/* Heading */}
                    <h1 className='text-4xl font-bold'>
                        <span data-aos="fade-down" className='font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-800'>Hi, I'm </span><br />
                        <span data-aos="fade-down" className= 'text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-red-800 '>
                            Prathyush
                        </span>
                        <br />
                        <span  className='text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            <TypeAnimation
                                sequence={[
                                    "Frontend Developer",
                                    1000,
                                    "Web Designer",
                                    1000,
                                    "Digital Marketing", 1000,
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p data-aos="fade-right"  className='mt-8 text-lg text-gray-300'>
                        I specialize in building modern and responsive web applications.
                    </p>

                    {/* Buttons */}
                    <div data-aos="fade-down" className='mt-8 space-x-4 flex justify-center md:justify-start'>      
                        <div class="relative inline-flex my-2 group">
                            <div
                                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href="#" title="Get quote now"
                                class="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">RESUME
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div data-aos="flip-up" className='mt-8 lg:mb-10 md:w-1/2  ml-10 mb-2'>
                    <div className='mx-auto h-72 w-72 relative '>
                        <img
                            src={Heroimage}
                            alt='Hero Image'
                            className='h-60 w-60 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
                            style={{ boxShadow: '0 4px 30px rgba(0, 0, 255, 0.6)' }} // Custom Blue Shadow
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
