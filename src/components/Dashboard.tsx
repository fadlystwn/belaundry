import React from 'react';
import Sidebar from './dashboard/Sidebar';
import Navbar from './Navigation';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-8">
          <div className="text-center text-gray-500">
            Dashboard content goes here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
