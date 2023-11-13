import React from 'react'
import Landing from './images/landing-page.gif'
import Ecommerce from './images/e-commerce.gif'
import Countsort from './images/count-sort-visualization.gif'
const Portfolio = () => {

    const skills = [
        {
            id: 1,
            src: Landing,
            name: 'Product Landing Page'
        },
        {
            id: 2,
            src: Ecommerce,
            name: 'E-commerce'
        },
        {
            id: 3,
            src: Countsort,
            name: 'Counting sort visualization'
        },
    ]

    return (
        <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg pt-48 p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="mb-8">
                    <h2 className="text-4xl inline font-bold border-b-4 border-gray-500">
                        Portfolio
                    </h2>
                    <p className="py-6">
                        Check out my work right here...
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        skills.map(({ id, src , name}) => {
                            return <div key={id} className="group shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
                                <img className="rounded-md duration-300 group-hover:scale-105" src={src} alt="img" />
                                <div className="flex items-center justify-center">
                                    <button className="px-6 py-1 m-4 duration-200 hover:scale-110"><a href={src} rel="noreferrer" target="_blank">{name}</a></button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
