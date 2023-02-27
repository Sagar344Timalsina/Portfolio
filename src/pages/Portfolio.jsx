import React from 'react'
import rocksissorpaper from '../assets/portfolio/RockSissorPaper.png';

import Flutter from '../assets/FlutterInside1.png';
import Grocery from '../assets/GroceryEKhata.png';



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: rocksissorpaper,
      demo: "https://sagartimalsina-rockpapersissor.netlify.app/",
      link: "https://github.com/Sagar344Timalsina/RockPaperSissor",
    },
    {
      id: 2,
      src: Flutter,
      demo: "https://drive.google.com/drive/folders/1g2i0iYi3yDQOPN3M2i5YZtLaCeyMxsPm",
      // link: "https://drive.google.com/drive/folders/1g2i0iYi3yDQOPN3M2i5YZtLaCeyMxsPm",
    },
    {
      id: 3,
      src: Grocery,
      demo: "https://drive.google.com/drive/folders/1CYOsW4qEdZT-SElU1VlsAdLzSlj0DPCX",
      link: "https://github.com/Sagar344Timalsina/SummerProject",
    },
   
  ];





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
            portfolios.map(({ id, src, demo, link }) => (
              <div key={id} className='shadow-md shadow-gray-800 rounded-lg'>
                <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                <div className='flex items-center justify-center '>
                  <a
                    href={demo}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='w-1/2 m-2 duration-200 px-6 hover:scale-105  hover:font-bold py-3' type='button'>Demo</button>
                  </a>
                  <a
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='w-1/2 m-2 duration-200 px-6 hover:scale-105  hover:font-semibold py-3'>Code</button>
                  </a>
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