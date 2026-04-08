import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'

const page = () => {
  return (
    <div>
        <Link href='/' className='text-2xl font-bold'><IoIosArrowRoundBack/></Link>
    </div>
  )
}

export default page