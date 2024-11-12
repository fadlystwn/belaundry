import React from 'react';
import SvgIcon from './SvgIcon';

const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow-md">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 focus:outline-none"
      >
        {/* Burger menu icon */}
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <h1 className="text-2xl font-semibold">Home</h1>
      <div className="flex items-center space-x-4">
        <SvgIcon src="./icons/user.svg" width={16} className="mr-2" />
        <span className="text-gray-500">John Doe</span>
      </div>
    </div>
  );
};

export default Navbar;
