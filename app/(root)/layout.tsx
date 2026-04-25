import React from "react";
import Sidebar from "@/components/home/Sidebar";
import RightPanel from "@/components/home/RightPanel";
import LeftPanel from "@/components/home/LeftPanel";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen bg-background text-foreground overflow-hidden">
      {/* Fixed Sidebar - visible always on md+ */}
      <div className="hidden md:flex shrink-0 border-r border-border">
        <Sidebar />
      </div>

      {/* LeftPanel - visible from lg+ */}
      <div className="hidden lg:flex shrink-0 border-r border-border w-64">
        <LeftPanel />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex justify-center overflow-y-auto min-h-screen">
        <div className="w-full md:max-w-2xl lg:max-w-3xl px-3 sm:px-4 py-6">
          {children}
        </div>
      </main>

      {/* Right Panel - visible from xl+ */}
      <aside className="hidden xl:flex shrink-0  border-border w-90">
        <RightPanel />
      </aside>
    </div>
  );
};

export default RootLayout;