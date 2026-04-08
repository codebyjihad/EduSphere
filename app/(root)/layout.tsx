import React from 'react'
import Sidebar from '@/components/home/Sidebar'
import RightPanel from '@/components/home/RightPanel'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   <div className='container max-w-7xl mx-auto flex justify-between'>
      <div><Sidebar></Sidebar></div>
      <main className='flex-1 md:max-w-xl border-r min-h-screen border-border overflow-auto'>{children}</main>
      <aside className='hidden xl:flex'>
           <RightPanel/>
      </aside>
   </div>  
  
  )
}

export default RootLayout