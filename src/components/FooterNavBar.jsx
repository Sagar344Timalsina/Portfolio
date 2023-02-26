import React, { useState } from 'react';
import { HiOutlineLightBulb, HiColorSwatch } from 'react-icons/hi';
import { BiHome } from 'react-icons/bi';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { MdLibraryBooks } from 'react-icons/md';
import { Link } from 'react-scroll';



const FooterNavBar = () => {

    const Menus = [
        { id: 1, name: 'home', dis: "translate-x-2 ", Icon: BiHome, link: 'home' },
        { id: 2, name: 'about', dis: "translate-x-[4.5rem]", Icon: BsFillPersonBadgeFill, link: 'about' },
        { id: 3, name: 'portfolio', dis: "translate-x-[9rem]", Icon: MdLibraryBooks, link: 'portfolio' },
        { id: 4, name: 'skills', dis: "translate-x-[12.4rem]", Icon: HiOutlineLightBulb, link: 'skills' },
        { id: 5, name: 'contact', dis: "translate-x-[16.7rem]", Icon: HiColorSwatch, link: 'contact' },
    ];

    const [active, setActive] = useState(0);

    return (
        <div className='  md:hidden w-fit  fixed bottom-0  '>
            <div className='flex justify-center w-screen '>
                <ul className='max-h-[4rem] h-screen flex relative items-center   rounded-t-xl bg-gray-200  px-6   ' >
                    <span className={`bg-rose-500 ${Menus[active].dis} duration-500 border-[6px]  border-gray-600 h-14 w-14 absolute -top-4 rounded-full`}>

                        {/* <span className='w-3.5 h-3.5 bg-transparent absolute top-2 -left-[18px] rounded-tr-[11px]  shadow-myshadow1'>

                </span>
                <span className='w-3.5 h-3.5 bg-transparent absolute top-2 -right-[18px] rounded-tl-[11px] shadow-myshadow2'>

                </span> */}

                    </span>


                    {

                        Menus.map((menu, i) => (

                            <li key={i} className='w-[4rem] px-4 py-3 flex justify text-center items-center ' >

                                <Link to={menu.link ||'/'} duration={500} smooth className='flex flex-col text-center pt-6 ' onClick={() => setActive(i)}>
                                    <span className={`text-xl flex justify-center pb-2 cursor-pointer duration-500  z-10 ${active === i && '-mt-6'}`}><menu.Icon /></span>
                                    <span className={`text-[15px]  capitalize ${active === i ? `translate-y-2 duration-700 opacity-100 ${<Link to={active.link} duration={800} smooth />}` : "opacity-0 translate-y-10"}`}>{menu.name}</span>
                                </Link>

                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FooterNavBar;