import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct
    },
    {
      id: 2,
      src: installNode
    },
    {
      id: 3,
      src: arrayDestruct
    },
    {
      id: 4,
      src: navbar
    },
    {
      id: 5,
      src: reactSmooth
    },
    {
      id: 6,
      src: reactWeather
    },
  ]
  return (
    <div name="portfolio" className='bg-slate-600
    w-full h-full text-white md:h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pt-12 pb-8'>
          <p className='text-5xl inline font-bold border-gray-300 border-b-4'>
            Portfolio
          </p>
          <p className='py-6 text-lg '>Check out my works here</p>
        </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({ id, src }) => (
              <div key={id} className='shadow-md shadow-gray-800 rounded-lg'>
                <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                <div className='flex items-center justify-center '>
                  <button className='w-1/2 m-2 duration-200 px-6 hover:scale-105  hover:font-bold py-3'>Demo</button>
                  <button className='w-1/2 m-2 duration-200 px-6 hover:scale-105  hover:font-semibold py-3'>Code</button>
                </div>
              </div>
            ))
          }


        </div>
      </div>
    </div>
  )
}

export default Portfolio