import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={25} />
        </>
      ),
      style: 'rounded-tr-md',
      href: 'https://linkedin.com'
    },
    {
      id: 2,
      child: (
        <>
          GitHub<FaGithub size={25} />
        </>
      ),

      href: 'https://github.com/Sagar344Timalsina'
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={25} />
        </>
      ),
      style: 'rounded-br-md',
      href: 'maito:timalsinas768@gmail.com'
    },

  ]


  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed   ">
      <ul>

        {
          links.map(({ id, child, href, style, download }) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4   bg-slate-800 ml-[-100px] hover:rounded-lg hover:ml-[-10px] hover:px-8 duration-300"+" " + style}>
              <a href={href}
                download={download}
                target='_blank'
                rel='noreferrer'
                className='flex justify-between items-center w-full  text-white'>
                {child}
              </a>
            </li>
          ))
        }


      </ul>
    </div>
  )
}

export default SocialLinks;