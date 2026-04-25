'use client'

import { useProvider } from '@/context/AuthProvider'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";
import { Input } from '../ui/input'
import Image from 'next/image';
import demouser from '@/public/userProfile.jpeg'
import { LuMoon, LuSun  } from "react-icons/lu";


const Navbar = () => {
    const { openMenu, handleMenuOpen , theme ,   toggleDarkMode} = useProvider()

    return (
        <nav className='p-2  border-b  sticky top-0 z-50 flex gap-4 items-center justify-between bg-background'>
            <div className='flex items-center gap-10'>
                <button onClick={handleMenuOpen} className='p-4 bg-secondary rounded-lg cursor-pointer'><FaChevronLeft /></button>
            <div className="flex items-center space-x-2 px-2  pr-20">
                <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold">E</div>
                <h1 className="font-semibold text-lg">Edu Sphere</h1>
            </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <Input placeholder='Search Problem' width={100}/>
                    <button className='bg-background border-2 px-3 py-1 border-border rounded-lg cursor-pointer'>Filter</button>
                </div>
                <button className='flex items-center gap-2 border border-border rounded-lg cursor-pointer px-3 py-1'>
                     <FaPlus/>
                      New Problem
                </button> 
                {/* Profile and Dark Mode enable  */}
                <div className='flex items-center gap-2'>
                    <Image src={demouser} width={30} height={30} alt='Profile Loading.....' className='rounded-full'/>
                    <button onClick={toggleDarkMode} className='p-2 cursor-pointer bg-secondary rounded-full border'>
                       {
                          theme === 'dark' ? <LuSun/> : <LuMoon/> 
                       }
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar