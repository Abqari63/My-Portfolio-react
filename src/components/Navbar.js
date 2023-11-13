import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 4,
            link: "Skills"
        },
        {
            id: 5,
            link: "Contact"
        }
    ]
    const [smallMenu, setsmallMenu] = useState(false);
    return (
        <div className=" bg-black flex justify-between items-center w-full fixed z-10 h-12">
            <h1 className="text-3xl ml-2 text-white font-moon p-1">Abqari</h1>
            <ul className="hidden sm:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-110 duration-200">
                        <Link to={link} smooth  duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setsmallMenu(!smallMenu)} className="cursor-pointer pr-4 z-10 text-gray-500 flex sm:hidden">
                {smallMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            {smallMenu && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 duration-1000">
                    {links.map((obj) => (
                        <li key={obj.id} className="px-4 cursor-pointer py-6 text-2xl duration-200 hover:scale-125">
                            <Link onClick={() => setsmallMenu(!smallMenu)} to={obj.link} smooth duration={500}>{obj.link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default Navbar
