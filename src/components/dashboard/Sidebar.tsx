import { Link } from 'react-router-dom';
import SvgIcon from '../../components/SvgIcon';
import { useState } from 'react';

type SidebarProps = {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
};

// Define the menu items as a constant
const MENU_ITEMS = [
  {
    path: '/',
    label: 'Home',
    icon: './icons/home.svg',
    hoverIcon: './icons/home-active.svg',
  },
  {
    path: '/products',
    label: 'Products',
    icon: './icons/folder_open.svg',
    hoverIcon: './icons/folder_open-active.svg',
  },
  {
    path: '/sales',
    label: 'Sales',
    icon: './icons/line_chart_up.svg',
    hoverIcon: './icons/line_chart_up-active.svg',
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: './icons/settings.svg',
    hoverIcon: './icons/settings-active.svg',
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarVisible,
  toggleSidebar,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-blue text-white p-5 transition-transform transform ${
        isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-64 z-20`}
    >
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-4 right-4 text-white"
      >
        ✕
      </button>

      <div className="flex items-center mb-10">
        <SvgIcon src="./icons/logo.svg" width={56} className="mr-1" />
        <span className="text-xl font-bold">BeLaundry</span>
      </div>

      <div className="space-y-4">
        {MENU_ITEMS.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center p-4 hover:bg-white hover:text-blue hover:rounded-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <SvgIcon
              src={hoveredIndex === index ? item.hoverIcon : item.icon}
              width={16}
              className="mr-3"
            />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
