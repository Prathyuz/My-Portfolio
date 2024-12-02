import React from 'react'

const services = [
    {
        id: 1,
        title: "Web Designs",
        description: "Creating visually and user-friendly web designs.",
    },
    {
        id: 2,
        title: "Front-End Development",
        description: "Building responsive and interactive user interfaces.",
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Promote your business with our digital marketing team.",
    }
]

const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='Services'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 data-aos="zoom-out" className='text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>My Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => {
                        return (
                            <div key={service.id}
                                className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                                <div data-aos="fade-left" className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                                    {service.id}
                                </div>
                                <h3 data-aos="fade-right" className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    {service.title}
                                </h3>
                                <p data-aos="fade-up" className='mt-2 text-gray-300'>{service.description}</p>
                                <a data-aos="zoom-in" href='#' className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read more</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service
