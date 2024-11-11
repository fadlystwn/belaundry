import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">Home</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">John Doe</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
          <span className="font-semibold">JD</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
