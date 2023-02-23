import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-[800px] p-4 text-white bg-slate-600 ' >
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-300'>Contact</p>
                    <p className='py-6 font-semibold'>Submit the form below to get in touch.....</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/3f900a17-d266-42c8-915b-82b70686e480" method='POST' autoComplete='off' className='flex flex-col w-full md:w-1/2'>
                        <input type='text' name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type='email' name="email" placeholder='Enter your email' className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 
                    px-6 py-3 mx-auto flex items-center rounded-md my-8 hover:scale-105 duration-300'>Lets Chat</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
