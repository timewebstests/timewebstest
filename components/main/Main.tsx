'use client';

import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ComputerCanvas from '@/components/canvas/Computers'
import styles from '@/styles'

function Main() {
    return (
        <div className='flex justify-center items-center mt-[50px] w-full'>
            <div className='absolute z-[50] h-[10%] w-[50%] inset-0 gradient-01' />
            <div className='w-[90%] flex justify-center'>
                <div className='w-full flex justify-between flex-nowrap'>
                    <div className='w-[50%] flex justify-start flex-wrap items-center'>
                        <div className='text-white text-[250px] font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white/30 via-[#48484825] to-transparent'>
                            N°1
                        </div>
                        <div className='absolute inset-[150px] mt-64 text-[100px] font-bold tracking-[1rem] flex flex-wrap'>
                            TIME
                        </div>
                        <div className='text-[60px] flex flex-wrap w-fit font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 absolute inset-[150px] mt-[355px] tracking-[1rem]'>
                            ESTATE
                        </div>
                    </div>
                    <div className='w-[50%] flex justify-center h-[500px] mt-12'>
                        <ComputerCanvas/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;