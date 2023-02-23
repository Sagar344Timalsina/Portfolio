import React from 'react'
import FrontEnd from "../components/FrontEnd"
import BackEnd from "../components/BackEnd"
import Adobe from '../components/Adobe'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-full pt-8 text-white bg-slate-600'>
      <div className='max-w-screen-lg w-full h-full p-6 mx-auto flex flex-col justify-center '>
        <div className='pt-8 pb-6 '>
          <p className='text-5xl  font-bold inline border-b-4 border-gray-300'>
            Skills
          </p>
        </div>
        <div className=''>
          <p className='text-xl py-4 font-bold'>FrontEnd Languages</p>
          <FrontEnd />
          <p className='text-xl py-4 font-bold'>BackEnd Languages</p>
          <BackEnd />
          <p className='text-xl py-4 font-bold'>Adobe Products </p>
          <Adobe/>
        </div>
      </div>
    </div>

  )
}

export default Skills
