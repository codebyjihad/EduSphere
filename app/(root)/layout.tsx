import React from 'react'
import Sidebar from '@/components/home/Sidebar'
import RightPanel from '@/components/home/RightPanel'
import LeftPanel from '@/components/home/LeftPanel'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen bg-background text-foreground overflow-hidden">
      {/* Left Sidebar (only on desktop) */}
      <div className="hidden md:flex shrink-0 border-r border-border">
        <Sidebar />
      </div>

      {/* Left Panel (visible on tablets and up) */}
      <div className="hidden md:flex shrink-0 border-r border-border">
        <LeftPanel />
      </div>

      {/* Main Content (full width on mobile) */}
      <main className="flex-1 overflow-y-auto min-h-screen px-3 sm:px-4 md:max-w-2xl border-r border-border">
        {children}
      </main>

      {/* Right Panel (desktop only) */}
      <aside className="hidden xl:flex shrink-0 border-l border-border">
        <RightPanel />
      </aside>
    </div>
  )
}

export default RootLayout