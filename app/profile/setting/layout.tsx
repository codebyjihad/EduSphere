import React from 'react'
import ProfileSidebar from '../(common)/ProfileSidebar'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='container max-w-7xl mx-auto flex'>
        <div><ProfileSidebar/></div>
        <main> {children}</main>
    </div>
  )
}

export default layout