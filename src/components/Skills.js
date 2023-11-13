import React from 'react'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import reactimg from './images/react.png'
import tailwindcss from './images/tailwindcss.png'
import cpp from './images/cpp.png'
const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        }, 
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        }, 
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        }, 
        {
            id: 4,
            src: reactimg,
            title: 'ReactJS',
            style: 'shadow-blue-300'
        }, 
        {
            id: 5,
            src: tailwindcss,
            title: 'TailwindCSS',
            style: 'shadow-sky-500'
        }, 
        {
            id: 6,
            src: cpp,
            title: 'C++ Programming',
            style: 'shadow-blue-900'
        }, 
    ]
  return (
    <div name="Skills" className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center pt-48 w-full h-full
         text-white">
            <div className="mb-8">
                <h3 className="text-4xl font-bold border-b-4 inline border-gray-500">Skills</h3>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0">
                {skills.map(({id, src, title, style})=> {
                    return <div key={id} className={`shadow-xl hover:scale-110 duration-300 py-2 rounded-lg ${style}`}>
                    <img className="w-44 mx-auto" src={src} alt="img" />
                    <p className="mt-4">{title}</p>
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Skills
