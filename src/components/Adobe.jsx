import React from 'react'
import ps from '../assets/ps.png';
import ai from '../assets/ai.png';

const Adobe = () => {
    const adobe=[
        {
            id:1,
            title:"Illustrator",
            src:ai,
            style:"shadow-orange-500"
        },
        {
            id:2,
            title:"Photoshop",
            src:ps,
            style:"shadow-blue-600"
        },
    ]
  return (
    <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
    {
      adobe.map(({ id, src, title, style }) => (

        <div key={id} className={`shadow-xl hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} className="w-20 mx-auto h-25" alt={title} />
          <p className='mt-4 font-bold'>{title}</p>
        </div>
      ))
    }
  </div>
  )
}

export default Adobe