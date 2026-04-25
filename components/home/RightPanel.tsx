'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const RightPanel = () => {
  const [isOpenMenu , setOpenMenu] = useState<boolean>(false)
    


  return (
    <div className='h-screen flex flex-col justify-between items-center bg-background p-4'>
          {/* Top bar */}
          <div>
               
          </div>
          {/* Bottom bar */}
          <div>
             <Button>

             </Button>
          </div>
    </div>
  )
}

export default RightPanel