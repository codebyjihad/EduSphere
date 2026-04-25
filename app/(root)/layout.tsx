import React from "react";
import Sidebar from "@/components/home/Sidebar";
import RightPanel from "@/components/home/RightPanel";
import LeftPanel from "@/components/home/LeftPanel";
import Navbar from "@/components/home/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background text-foreground w-full min-h-screen relative">

      <div className="fixed top-0 left-0 w-full z-40">
        <Navbar />
      </div>

      <div className="hidden md:flex fixed top-[64px] left-0 h-[calc(100vh-64px)] border-r border-border z-30">
        <Sidebar />
      </div>
      <div className="hidden lg:flex fixed top-[64px] left-[80px] h-[calc(100vh-64px)] w-64 z-20">
        <LeftPanel />
      </div>

      {/* 🔹 Fixed RightPanel (visible xl+) */}
      <div className="hidden xl:flex fixed top-[64px] right-0 h-[calc(100vh-64px)] border-l border-border w-80 z-20">
        <RightPanel />
      </div>

      {/* 🔹 Scrollable main feed */}
      <main className="relative flex pt-[64px] overflow-y-auto min-h-screen">
        <div className="w-full md:ml-[80px] lg:ml-[344px] xl:mr-[320px] px-3 sm:px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default RootLayout;