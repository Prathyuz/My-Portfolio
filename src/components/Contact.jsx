import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-black text-white py-20" id="Contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 data-aos="fade-up" className="text-4xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Contact</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 data-aos="fade-right" className="mt-2 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Let' s Talk</h3>
                        <p data-aos="fade-up" className="mt-2 text-lg text-gray-500">
                            I'm open to discussing web development projects or partnership opportunities.
                        </p>

                        {/* Email Section */}
                        <div className="mb-4 mt-8">
                            <FaEnvelope data-aos="fade-right" className="inline-block text-green-400 mr-2" />
                            <a href="mailto:prathyushraji25@gmail.com" data-aos="fade-left" className="text-gray-500 hover:underline">
                                Prathyushraji25@gmail.com
                            </a>
                        </div>

                        {/* Phone Section */}
                        <div className="mb-4 mt-8">
                            <FaPhone data-aos="fade-right" className="inline-block text-green-400 mr-2" />
                            <span data-aos="fade-right" className="text-gray-500">+91 9566778205</span>
                        </div>

                        {/* Address Section */}
                        <div className="mb-4 mt-8">
                            <FaMapMarkedAlt data-aos="fade-right" className="inline-block text-green-400 mr-2" />
                            <span data-aos="fade-right" className="text-gray-500">Pollachi-642003, Coimbatore, Tamil Nadu</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" data-aos="fade-right" className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Your Name</label>
                                <input data-aos="fade-left" type="text"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter you Name" />
                            </div>
                            <div>
                                <label htmlFor="email" data-aos="fade-right" className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Your Email</label>
                                <input data-aos="fade-left" type="email"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter you Email" />
                            </div>

                            <div>
                                <label htmlFor="message" data-aos="fade-right" className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Message</label>
                                <textarea data-aos="fade-left" type="text"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    rows="5" placeholder="Enter you Message" />
                            </div>
                            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-5 py-1 pb-2 rounded-full">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;
