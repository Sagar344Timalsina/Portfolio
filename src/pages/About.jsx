import React from 'react';
import { Link } from 'react-scroll';
import { TbFiles } from 'react-icons/tb';
// import { GrContactInfo } from 'react-icons/gr';

const About = () => {
    return (
        <div name="about" className='w-full h-full text-white bg-slate-600'>
            <div className='max-w-screen-lg w-full h-full p-6 pt-12 mx-auto flex flex-col justify-center '>
                <div className='pt-8 pb-6 '>
                    <p className='text-4xl  font-bold inline border-b-4 border-gray-300'>
                        About Me
                    </p>
                </div>
                <p className='text-xl '>
                    Hello, I am <span style={{ color: "rgb(244 63 94)", fontFamily: "cursive" }}>Sagar Timalsina </span>and I am currently interested at frontend development.
                    Although I have knowledge of different programming language including backend.
                </p>
                <p className='text-xl mt-6'>
                    If you review my CV you get know about my educational background and how <span style={{ color: "rgb(244 63 94)", fontFamily: "cursive" }}>enegetic</span >, <span style={{ color: "rgb(244 63 94)", fontFamily: "cursive" }}>creative </span>and
                    <span style={{ color: "rgb(244 63 94) ", fontFamily: "cursive" }}> hardworking</span>  person I am through different projects I have done.I am quiet observant,honest and <span style={{ color: "rgb(244 63 94)", fontFamily: "cursive" }}>Anti-social extrovert</span> type of guy.
                </p>
                <br />
                <p className='text-xl '>
                    I like to watch <span style={{ color: "rgb(244 63 94) ", fontFamily: "cursive" }}>Movies</span> and listen to <span style={{ color: "rgb(244 63 94) ", fontFamily: "cursive" }}>Music</span> some of my favourite genres in Movies are Horror, Thriller, Psychological, Mystery and Comedy.In Music I love to listen Pop, Rap, little bit of Metal and Rock too.
                    I am very much fond of different gadgets that launch in the market and the technologies they use.

                </p>
                <br />
                <div  >

                    <button className='cursor-pointer text-white w-fit rounded-md px-6 my-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 border border-spacing-1 '>
                        <a href="/Sagar-Timalsina-cv.pdf"
                            download={true}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='flex items-center justify-evenly'>

                                <span className='text-xl pr-3'>Download CV</span>
                                <TbFiles size={20} />
                            </div>
                        </a>

                    </button>
                    <button className='cursor-pointer text-white w-fit rounded-md px-6 my-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 border border-spacing-1 ' ><Link to="contact" smooth duration={500}>
                        <div className='flex items-center  justify-evenly'>
                            <span className=' text-xl'>Contact Me</span>
                            {/* <GrContactInfo style={{color:"white"}} className='text-white' size={20}/> */}
                        </div>
                    </Link></button>
                </div>
            </div>
        </div>
    )
}

export default About