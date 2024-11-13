import React from 'react';
import SvgIcon from './SvgIcon';

const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow-md">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 focus:outline-none"
      >
        <SvgIcon src="./icons/logo.svg" width={56} className="mr-1" />
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
