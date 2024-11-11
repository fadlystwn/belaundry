import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '../../components/SvgIcon';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-blue text-white h-screen p-5">
      <div className="flex items-center mb-10">
        <div className="w-10 h-10 bg-red-500 rounded-full mr-3"></div>
        <span className="text-xl font-bold">BeLaundry</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-blue-600">
          <Link to="/" className="flex items-center p-4 hover:bg-white">
            <SvgIcon src="./icons/home.svg" width={16} className="mr-3" />
            Home
          </Link>
        </div>
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-600 cursor-pointer">
          <Link
            to="/products"
            className="flex items-center p-4 hover:bg-gray-700"
          >
            <SvgIcon
              src="./icons/folder_open.svg"
              width={16}
              className="mr-3"
            />
            Products
          </Link>
        </div>
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-600 cursor-pointer">
          <Link to="/sales" className="flex items-center p-4 hover:bg-gray-700">
            <SvgIcon
              src="./icons/line_chart_up.svg"
              width={16}
              className="mr-3"
            />
            Sales
          </Link>
        </div>
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-600 cursor-pointer">
          <Link
            to="/settings"
            className="flex items-center p-4 hover:bg-gray-700"
          >
            <SvgIcon src="./icons/settings.svg" width={16} className="mr-3" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
