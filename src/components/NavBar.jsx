import React from 'react';
import { Link } from 'react-scroll';
// import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];
    return (
        <div className='bg-slate-700 w-full h-16 fixed px-3 text-white flex justify-between items-center'>
            <h1 className='font-signature text-4xl ml-2 '>
                <Link to='home' smooth duration={500}>Sagar</Link>
            </h1>
            {/* <span><FaBars/></span> */}
            <ul className='hidden md:flex '>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize text-gray-300 hover:scale-105 duration-200'>
                        <Link to={link} duration={500} smooth>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavBar;