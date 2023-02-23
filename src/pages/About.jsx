import React from 'react';
import { TbFiles } from 'react-icons/tb';

const About = () => {
    return (
        <div name="about" className='w-full h-full text-white bg-slate-600'>
            <div className='max-w-screen-lg w-full h-full p-6 pt-12 mx-auto flex flex-col justify-center '>
                <div className='pt-8 pb-6 '>
                    <p className='text-4xl  font-bold inline border-b-4 border-gray-300'>
                        About Me
                    </p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo hic, incidunt ab obcaecati in aut voluptatem porro
                    saepe neque officia repellat, nobis dolor natus dolore
                    reiciendis est quas eos ipsam?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta officiis eum at atque. Voluptas delectus saepe dolores
                    dolore a magni vel hic itaque
                    rem labore odio deleniti ducimus ab excepturi fuga, aut vitae optio
                    nostrum aliquam numquam velit voluptatem consequatur esse.
                    Beatae quis, recusandae eveniet ratione deleniti id adipisci
                    minus?

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta officiis eum at atque. Voluptas delectus saepe dolores
                    dolore a magni vel hic itaque
                    rem labore odio deleniti ducimus ab excepturi fuga, aut vitae optio
                    nostrum aliquam numquam velit voluptatem consequatur esse.
                    Beatae quis, recusandae eveniet ratione deleniti id adipisci
                    minus?
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo hic, incidunt ab obcaecati in aut voluptatem porro
                    saepe neque officia repellat, nobis dolor natus dolore
                    reiciendis est quas eos ipsam?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta officiis eum at atque.
                </p>
                <div  >

                    <button className='cursor-pointer text-white w-fit rounded-md px-6 my-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 border border-spacing-1 '>
                        <a href="/Sagar-Timalsina-cv.pdf"
                            download={true}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span className='text-2xl'>Download CV</span>
                            <TbFiles size={30} />
                        </a>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default About