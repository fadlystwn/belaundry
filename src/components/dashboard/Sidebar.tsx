import { Link } from 'react-router-dom';
import SvgIcon from '../../components/SvgIcon';

type SidebarProps = {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarVisible,
  toggleSidebar,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-blue text-white p-5 transition-transform transform ${
        isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-64 z-20`}
    >
      {/* Close button for mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-4 right-4 text-white"
      >
        ✕
      </button>

      <div className="flex items-center mb-10">
        <div className="w-10 h-10 bg-red-500 rounded-full mr-3"></div>
        <span className="text-xl font-bold">BeLaundry</span>
      </div>

      <div className="space-y-4">
        <Link
          to="/"
          className="flex items-center p-4 hover:bg-white hover:text-blue"
        >
          <SvgIcon src="./icons/home.svg" width={16} className="mr-3" />
          Home
        </Link>

        <Link
          to="/products"
          className="flex items-center p-4 hover:bg-white hover:text-blue"
        >
          <SvgIcon src="./icons/folder_open.svg" width={16} className="mr-3" />
          Products
        </Link>

        <Link
          to="/sales"
          className="flex items-center p-4 hover:bg-white hover:text-blue"
        >
          <SvgIcon
            src="./icons/line_chart_up.svg"
            width={16}
            className="mr-3"
          />
          Sales
        </Link>

        <Link
          to="/settings"
          className="flex items-center p-4 hover:bg-white hover:text-blue"
        >
          <SvgIcon src="./icons/settings.svg" width={16} className="mr-3" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
