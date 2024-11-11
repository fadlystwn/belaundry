import React from 'react';
import Sidebar from './dashboard/Sidebar';
import Navbar from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-8">
          <div className="text-center text-gray-500">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
