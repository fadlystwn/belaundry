'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Sidebar from './dashboard/Sidebar';
import Navbar from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative flex min-h-screen bg-lightBlue">
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:transform-none ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
      </div>

      {isSidebarVisible && window.innerWidth < 1024 && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex-1 transition duration-300 ease-in-out">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-8  text-gray-500">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
