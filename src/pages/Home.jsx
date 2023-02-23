import React from 'react';
import { BsFillFileArrowDownFill } from 'react-icons/bs';
import second from '../assets/heroImage.jpg';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div name="home" className=' h-full  w-full  bg-slate-600  '>
            <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-screen w-screen px-6'>
                    <h2 className='text-5xl max-w-md  sm:text-5xl font-bold text-white'>
                        I am a Full Stack Developer
                    </h2>
                    <p className='text-gray-300 py-4 max-w-md text-[1rem]'>
                        I have a knowledge of front end as well as backend in several languages like PHP, Java, Python, HTML, CSS, JS, Flutter and ReactJS.
                        But currently I love to work on web app using reactjs and tailwind frameworks
                    </p>
                    <div>
                        <Link to='portfolio' duration={500} smooth className='cursor-pointer text-white w-fit rounded-md px-6 py-3 my-2 flex items-center bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 border border-spacing-1 '>
                            <span className='text-2xl'>Portfolio</span>
                            <span className='pl-3'><BsFillFileArrowDownFill size={25} /></span>
                        </Link>
                    </div>
                </div>
                <div >
                    <img src={second} alt="my profile" className='rounded-2xl  mx-[0.5px]    md:w-full' />
                </div>
            </div>

        </div>
    )
}

export default Home