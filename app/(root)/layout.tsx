import React from "react";
import Sidebar from "@/components/home/Sidebar";
import RightPanel from "@/components/home/RightPanel";
import LeftPanel from "@/components/home/LeftPanel";
import Navbar from "@/components/home/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 🔹 Navbar stays fixed on top */}
      <Navbar />

      {/* 🔹 Main 3-column layout under navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (visible from md+) */}
        <div className="hidden md:flex shrink-0 border-r border-border">
          <Sidebar />
        </div>

        {/* LeftPanel (visible from lg+) */}
        <div className="hidden lg:flex shrink-0 border-r border-border w-64">
          <LeftPanel />
        </div>

        {/* Main Feed */}
        <main className="flex-1 flex justify-center overflow-y-auto border-r border-border">
          <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-[820px] px-3 sm:px-4 py-6">
            {children}
          </div>
        </main>

        {/* RightPanel (visible from xl+) */}
        <aside className="hidden xl:flex shrink-0 border-l border-border w-80">
          <RightPanel />
        </aside>
      </div>
    </div>
  );
};

export default RootLayout;