import React from 'react';
import { Link } from 'react-scroll';
import myImage from './images/abqari.jpeg';
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        I'm a college student 
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am currently Studying in Lovely Professional University (LPU) and I have worked with HTML, CSS and JS with ReactJS and TailwindCSS and continuously improving my skills to become a full stack web developer.
                    </p>

                    <div>
                        <Link to="Portfolio" smooth duration={500} className="group text-white text-lg w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-200">
                            Portfolio<span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25} className="ml-1" /></span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={myImage} alt="img" className="rounded-2xl mx-auto w-1/3 lg:w-2/3 md:w-1/2" />
                </div>
            </div>
        </div>
    )
}

export default Home
