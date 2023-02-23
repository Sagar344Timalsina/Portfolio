import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import flutter from "../assets/flutter.png";

const FrontEnd = () => {
  const frontEnd = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-300'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'

    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-400'

    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-sky-500'

    },
    // {
    //   id: 5,
    //   src: tailwind,
    //   title: 'Tailwind CSS',
    //   style: 'shadow-green-900'

    // },
    {
      id: 5,
      src: flutter,
      title: 'Flutter ',
      style: 'shadow-sky-400'

    },
  ]


  return (

    <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
      {
        frontEnd.map(({ id, src, title, style }) => (

          <div key={id} className={"shadow-xl hover:scale-105 duration-500 py-2 rounded-lg"+" "+style}>
            <img src={src} className="w-20 h-25 mx-auto" alt={title} />
            <p className='mt-4 font-bold'>{title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default FrontEnd