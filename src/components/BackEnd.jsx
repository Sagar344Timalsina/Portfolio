import React from 'react'
import java from "../assets/Java.png";
import node from "../assets/node.png";
import git from "../assets/github.png";
import python from "../assets/python.png";
import php from "../assets/php.png";
import mySQL from "../assets/mySQL.png";
const BackEnd = () => {
  const backEnd = [
    {
      id: 1,
      src: java,
      title: 'JAVA',
      style: 'shadow-red-300'
    },
    {
      id: 2,
      src: node,
      title: 'Node',
      style: 'shadow-green-400'

    },
    {
      id: 3,
      src: python,
      title: 'python',
      style: 'shadow-green-100'

    },
    {
      id: 4,
      src: php,
      title: 'PHP',
      style: 'shadow-blue-300'

    },
    {
      id: 5,
      src: git,
      title: 'GIT',
      style: 'shadow-white'

    },
    {
      id: 6,
      src: mySQL,
      title: 'My SQL',
      style: 'shadow-orange-500'

    },
  ]
  return (
    <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
    {
      backEnd.map(({ id, src, title, style }) => (

        <div key={id} className={`shadow-xl hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} className="w-20 h-25 mx-auto" alt={title} />
          <p className='mt-4 font-bold'>{title}</p>
        </div>
      ))
    }
  </div>
  )
}

export default BackEnd