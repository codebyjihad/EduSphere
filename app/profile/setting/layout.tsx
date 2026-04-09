import React from 'react';
import ProfileSidebar from '../(common)/ProfileSidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const ProfileLayout = ({ children }: LayoutProps) => {
  return (
    <div className="container max-w-7xl mx-auto flex gap-6 py-6">
      
      <aside className="w-64 flex-shrink-0">
        <ProfileSidebar />
      </aside>

      <main className="flex-1  p-6 rounded-lg shadow-md min-h-screen">
        {children}
      </main>
      
    </div>
  );
};

export default ProfileLayout;