'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useProvider } from '@/context/AuthProvider'
import { sideBarItems } from './sidebarItems'
import { CiSettings } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";


import Link from 'next/link'


const Sidebar = () => {
    const { openMenu, handleMenuOpen } = useProvider()
    const pathName = usePathname()

    return (
        <div
            className={`h-screen p-4 bg-background border-r border-border ${openMenu ? 'xl:w-50 lg:w-45 md:w-40' : 'w-20'
                } transition-all duration-300 flex flex-col justify-between z-10`}
        >

            <div>
                <button onClick={handleMenuOpen} className={`cursor-pointer p-3 rounded-lg mb-4 flex items-center bg-secondary w-full ${openMenu ? `justify-center` : `justify-start`}`}>
                     <FaChevronLeft className={`transition-transform duration-300 ${openMenu ? 'rotate-180' : ''}`} />
                </button>


                <div className="flex flex-col gap-2 border-t
      ">
                    {sideBarItems.map((items, index) => {
                        const currentPath = pathName === items.href

                        return (
                            <button
                                key={index}
                                className={`p-3 rounded-lg flex items-center gap-3 w-full ${currentPath
                                        ? 'bg-primary text-white'
                                        : 'text-muted-foreground hover:bg-muted'
                                    }`}
                            >
                                <Link href={items.href} className='flex items-center gap-2'>
                                    <items.icon />
                                    {openMenu && <span className='text-sm lg:text-base'>{items.name}</span>}
                                </Link>
                            </button>
                        )
                    })}
                </div>
            </div>
            <Link href='/setting' className='flex items-center gap-2 p-3 rounded-lg hover:bg-muted' onClick={handleMenuOpen}>
               <CiSettings />
               {openMenu && <span className='text-sm lg:text-base text-muted-foreground hover:bg-muted'>Settings</span>}
            </Link>
        </div>
    )
}

export default Sidebar