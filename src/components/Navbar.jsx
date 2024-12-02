import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav className='bg-black text-white px-8 pt-2 font-semibold sm:px-8 md:px-16 lg:px-24 sticky top-0 z-10'>
            <div className='container py-2 flex justify-between items-center'>
                <div data-aos="fade-right" className='text-2xl font-bold hidden md:inline'>
                    <span className='text-blue-500'>Y</span>u<span className='text-green-700'>Z</span>z
                </div>

                {/* Hamburger Icon for small screens */}
                <div data-aos="fade-right" className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none'>
                        <div className="group flex h-10 w-10 cursor-pointer items-center justify-center p-2">
                            <div className="space-y-2">
                                {/* Top line */}
                                <span
                                    className={`block h-1 w-8 origin-center rounded-full bg-green-600 transition-transform ease-in-out 
            ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                                ></span>

                                {/* Middle line */}
                                <span
                                    className={`block h-1 w-6 origin-center rounded-full bg-slate-500 transition-transform ease-in-out 
            ${isMenuOpen ? 'opacity-0' : ''}`}
                                ></span>

                                {/* Bottom line */}
                                <span
                                    className={`block h-1 w-8 origin-center rounded-full bg-red-600 transition-transform ease-in-out 
            ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
                                ></span>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Desktop Menu (visible on larger screens) */}
                <div data-aos="zoom-in" className='hidden md:flex space-x-6 '>
                    <a href='#Home' className='text-red-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-50'>
                        Home
                    </a>
                    <a href='#about' className='text-red-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-50'>
                        About Me
                    </a>
                    <a href='#Services' className='text-red-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-50'>
                        My Skills
                    </a>
                    <a href='#Projects' className='text-red-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-50'>
                        Projects
                    </a>
                    <a href='#Contact' className='text-red-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-50'>
                        Contact
                    </a>
                </div>

                {/* Button */}
                <div data-aos="fade-left" className='my-2'>
                    <a href="#Contact" className="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-indigo-200 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-900 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-blue-100">CONNECT</span>
                    </a>
                </div>
            </div>

            {/* Mobile Menu (visible on small screens when hamburger is clicked) */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white space-y-4 py-4`}>
                <a href='#Home' className='block text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-50'>
                    Home
                </a>
                <a href='#about' className='block text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-50'>
                    About Me
                </a>
                <a href='#Services' className='block text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-50'>
                    My Skills
                </a>
                <a href='#Projects' className='block text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-50'>
                    Projects
                </a>
                <a href='#Contact' className='block text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-50'>
                    Contact
                </a>

                {/* Centering the "Connect Me" button */}
                <div className="flex justify-center">
                    <div className=' space-x-4 flex justify-center md:justify-start'>
                        <div className="relative inline-flex my-5 group">
                            <div
                                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href="#Contact"
                                data-aos="fade-right"
                                title="Get quote now"
                                className="relative inline-flex items-center justify-center px-9 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">CONNECT ME
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
