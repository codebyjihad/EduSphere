'use client'

import { useProvider } from '@/context/AuthProvider'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const Navbar = () => {
    const { openMenu, handleMenuOpen } = useProvider()

    return (
        <nav className='p-2  border-b  sticky top-0 z-50 flex gap-4 items-center'>
            <button onClick={handleMenuOpen} className='p-4 bg-secondary rounded-lg cursor-pointer'><FaChevronLeft /></button>
            <div className="flex items-center space-x-2 px-2 border-r border-border pr-20">
                <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold">E</div>
                <h1 className="font-semibold text-lg">Edu Sphere</h1>
            </div>
        </nav>
    )
}

export default Navbar