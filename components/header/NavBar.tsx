'use client';

import Logo from './Logo'
import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const myStyles = {
    myClass: 'hover:text-[#90d6ff] hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-[#ca98dd] rounded-lg',
    right: 'hover:text-[#90d6ff] hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-[#ca98dd] rounded-lg',
};

function Navbar() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };

    return (
        <>
            <div className=" bg-transparent w-full h-36 flex items-center justify-between p-12 z-[500]">
                <Logo />
                <div className={`flex justify-start lg:hidden  overflow-y-hidden z-[500] ${menuVisible ? '' : 'hidden'}`}>
                    <div className='absolute w-6/12 max-sm:w-full h-[100%] top-0 left-0 z-[500] bg-[#606C5D] p-7 shadow-navbar'>
                        <div className='flex justify-between w-full'>
                            <FontAwesomeIcon icon={faCircleXmark} className='text-[#8dc4e4] hover:text-white z-[500] w-7 h-7' onClick={toggleMenu}/>
                        </div>
                        <div className='grid justify-start text-xl p-3 space-y-6 font-bold w-full'>
                            <Link href="/auto/" className='mt-24 hover:mr-12 text-white hover:text-[#F7E6C4] w-full'>Time</Link>
                            <Link href="/immobilien/" className='text-white hover:text-[#F7E6C4] w-full'>Team</Link>
                            <Link href="/jobs/" className='text-white hover:text-[#F7E6C4]'>Servizi</Link>
                            <Link href="/reisen/" className='text-white hover:text-[#F7E6C4]'>Contattaci</Link>
                        </div>
                    </div>
                </div>   
                <div className="lg:flex justify-center items-center text-xl font-bold text-[#ffffff] max-sm:hidden sm:hidden"> 
                    <div className="pr-20">
                        <Link href="/auto/" className={myStyles.myClass}>Time</Link>
                    </div>
                    <div className="pr-20">
                        <Link href="/immobilien/" className={myStyles.myClass}>Team</Link>
                    </div>
                    <div className="pr-20">
                        <Link href="/jobs/" className={myStyles.myClass}>Servizi</Link>
                    </div>
                    <div className="">
                        <Link href="/reisen/" className={myStyles.right}>Contattaci</Link>
                    </div>
                </div>
                <div className='text-[#8dc4e4] text-3xl font-bold flex lg:hidden justify-between items-center'>

                    <div className="z-[400]">
                        <FontAwesomeIcon icon={faBars} className='text-[#8dc4e4] hover:text-[#ffcd48] z-[400] w-7 h-7' onClick={toggleMenu}/>
                    </div>

                    <Link href="/" className="z-[400]">
                        <Image src="./white.png" width={150} height={150} alt="Logo" className=''/>
                    </Link>

                    <div></div>
                </div>
            </div>    

        </>
    )
}

export default Navbar;