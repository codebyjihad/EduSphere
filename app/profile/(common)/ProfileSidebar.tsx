import { User02Icon } from '@hugeicons/core-free-icons'
import Link from 'next/link';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosArrowRoundBack } from "react-icons/io";


const ProfileSidebar = () => {
  return (
    <div className='fixed top-0 overflow-auto  h-screen w-56 bg-background text-foreground flex flex-col justify-between border-r border-border'>
         {/* Profile Icone */}
        <div>
             <Link href='/profile' className='text-2xl font-bold'><IoIosArrowRoundBack/></Link>
             <div className='p-3 flex items-center border-b-2'>
              <FaUserCircle className="text-5xl mr-3"/>
              <span className='text-xl font-bold text-foreground'>User Name ?</span>
         </div>
        </div>
    </div>
  )
}

export default ProfileSidebar