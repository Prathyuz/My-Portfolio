import React from 'react';
import employeMSImage from "../assets/e-commerce-shop.png";
import bookMSImages from "../assets/game-project.jpeg";
import login from "../assets/login-project.jpeg";

const projects = [
    {
        id: 1,
        name: "Shopping Website",
        technologies: "REACTJS,JS,CSS3,HTML5",
        image: employeMSImage,
        github: "https://github.com/Prathyuz/E-Commerce-HTML-CSS-JS.git",
    },
    {
        id: 2,
        name: "Small Games",
        technologies: "REACTJS,JS,CSS3,HTML5",
        image: bookMSImages,
        github: "https://github.com/Prathyuz/Image-Puzzle---HTML-CSS-JS.git",
    },
    {
        id: 1,
        name: "Login Page",
        technologies: "REACTJS,JS,CSS3,HTML5",
        image: login,
        github: "https://github.com/Prathyuz/Login-HTML-CSS.git",
    }
]
const Project = () => {
    return (
        <div className='bg-black text-white py-20' id='Projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 data-aos="fade-up" className='text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>Others</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div key={project.id}
                            className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <img data-aos="zoom-in" src={project.image} alt=""
                                className='rounded-lg mb-4 w-full h-48 object-cover' />
                            <h3 data-aos="fade-right" className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p data-aos="fade-left" className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a data-aos="flip-up" href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-gray-800 px-4 py-2 rounded-full' target="_blank" rel="noopener noreferrer">GitHub</a>                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Project