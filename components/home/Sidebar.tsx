'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { useProvider } from '@/context/AuthProvider'
import { sideBarItems } from './sidebarItems'
import { CiSettings } from 'react-icons/ci'
import Link from 'next/link'

const Sidebar = () => {
  const { openMenu } = useProvider()
  const pathName = usePathname()

  return (
    <div
      className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] bg-background border-r border-border flex flex-col justify-between transition-all duration-300 ${
        openMenu ? 'xl:w-50 lg:w-45 md:w-40' : 'w-20'
      } z-30`}
    >
  
      <div className="flex-1 overflow-y-auto px-4 pb-3">
        <div className="flex flex-col gap-2 pt-2">
          {sideBarItems.map((item, index) => {
            const currentPath = pathName === item.href

            return (
              <Link
                href={item.href}
                key={index}
                className={`p-3 rounded-lg flex items-center gap-3 w-full ${
                  currentPath
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                <item.icon size={20} />
                {openMenu && (
                  <span className="text-sm lg:text-base">{item.name}</span>
                )}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="border-t border-border">
        <Link
          href="/setting"
          className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition"
        >
          <CiSettings />
          {openMenu && (
            <span className="text-sm lg:text-base text-muted-foreground hover:text-foreground">
              Settings
            </span>
          )}
        </Link>
      </div>
    </div>
  )
}

export default Sidebar