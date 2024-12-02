import React from 'react';
import img1 from '../assets/tech/1.jpg';
import img2 from '../assets/tech/2.jpg';
import img3 from '../assets/tech/3.jpg';
import img4 from '../assets/tech/4.jpg';
import img5 from '../assets/tech/5.jpg';
import img6 from '../assets/tech/6.jpg';
import img8 from '../assets/tech/8.jpg';
import Marquee from "react-fast-marquee";

const Technical = () => {
    return (
        <div className="bg-black">
            <div className="mx-4 py-10 sm:mx-8 md:mx-16 lg:mx-64 px-4 py-8">
                <div className="text-center mb-8">
                    <h1 data-aos="fade-up" className="text-3xl py-5 mb-8 mt-10 font-semibold text-gray-100 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                        TECHNICAL SKILLS
                    </h1>
                </div>

                <div>
                    <Marquee className="overflow-hidden">
                        <div className="grid grid-cols-7 md:grid-cols-4 lg:grid-cols-7 gap-5">
                            <img src={img1} alt="tech-1" className="w-24 h-20 sm:w-28 sm:h-24 mx-auto object-contain" />
                            <img src={img2} alt="tech-2" className="w-24 h-20 sm:w-28 sm:h-24 mx-auto object-contain" />
                            <img src={img3} alt="tech-3" className="w-24 h-20 sm:w-28 sm:h-24 mx-auto object-contain" />
                            <img src={img4} alt="tech-4" className="w-24 h-20 sm:w-28 sm:h-24 mx-auto object-contain" />
                            <img src={img5} alt="tech-5" className="w-24 h-20 sm:w-28 sm:h-24 mx-auto object-contain" />
                            <img src={img6} alt="tech-6" className="w-24 h-20 sm:w-28 sm:h-24 mx-auto object-contain" />
                            <img src={img8} alt="tech-8" className="w-24 h-20 sm:w-28 sm:h-24 mx-auto object-contain" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Technical;
