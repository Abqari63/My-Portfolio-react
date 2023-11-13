import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Contact = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/abqariabbas/',
            style: 'rounded-tr-md'
        },

        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Abqari63'
        },

        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:abqariabbas63@gmail.com'
        },

        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'Resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]
    return (
        <div name="Contact" className="w-full h-full bg-gradient-to-b from-black to-gray-800 pt-48 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</h3>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/127089ac-e5dc-499b-b9cf-06dfe7ff7425" method="post" className="flex flex-col w-full md:w-1/2">
                        <input className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" type="text" name="name" placeholder="Enter your name" />

                        <input className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" type="text" name="email" placeholder="Enter your email" />

                        <textarea className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="message" rows="10" placeholder="Enter you message"></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
            <div className="lg:hidden text-center shadow-md shadow-gray-800 p-5 w-full h-fit bg-gradient-to-b from-gray-800 to-black">
                <div className="pb-5">
                <span>Social Handles</span>
                </div>
                <ul className="flex flex-wrap justify-evenly gap-5">
                    {links.map(({ id, child, href, style, download }) => (
                        <li key={id} className="flex justify-between items-center w-40 h-12 px-4 duration-300 rounded-md bg-gray-500 hover:scale-105">
                            <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Contact

