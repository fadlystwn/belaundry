// src/components/Dashboard.tsx
import React from 'react';
import BalanceCard from './components/BalanceCard';
import SvgIcon from './components/SvgIcon';

const Dashboard: React.FC = () => {
  const svgBackground = `
  <svg width="375" height="255" viewBox="0 0 375 255" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="183.5" cy="53" rx="283.5" ry="202" fill="#F36868"/>
    </svg>
  `;

  const svgBackgroundUrl = `data:image/svg+xml,${encodeURIComponent(
    svgBackground,
  )}`;

  return (
    <>
      <div className="bg-lightBlue p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto space-y-6">
        <div
          className="h-40 w-full absolute"
          style={{
            backgroundImage: `url(${svgBackgroundUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            height: '360px',
            margin: '-160px auto',
            top: '48px',
            left: 0,
            right: 0,
            zIndex: 0,
          }}
        />
        {/* Welcome and Balance Card */}
        <div className="relative z-10 top-10">
          <h1 className="text-white mb-3 text-xl">Welcome John</h1>
          <BalanceCard />

          {/* Previous Order */}
          <h3 className="text-gray-700 text-sm sm:text-base uppercase font-bold mb-2">
            Previous Order
          </h3>
          <div className="bg-white mb-10 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-2">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Previous order"
                  className="rounded-lg"
                />
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-medium text-sm sm:text-base mb-3">
                  Bag of Laundry
                </p>
                <p className="text-xs text-gray-700">Total Order</p>
                <p className="text-blue text-sm sm:text-base font-semibold">
                  $ 180.00
                </p>
              </div>
              <div className="ml-auto p-2 text-center bg-gradient-to-t from-blue to-electricBlue rounded">
                <SvgIcon
                  src="./icons/note.svg"
                  width={48}
                  className="mx-auto my-2"
                />
                <button className="text-blue-500 bg-blue-100 px-3 text-white text-xs sm:text-sm">
                  INVOICE
                </button>
              </div>
            </div>
          </div>

          {/* Most Ordered */}
          <h3 className="text-gray-700 text-sm sm:text-base uppercase font-bold">
            Your Most Ordered
          </h3>
          <div className="mb-10 rounded-lg shadow-md">
            <div className="relative mt-3">
              <img
                src="https://via.placeholder.com/150"
                alt="Most ordered"
                className="w-full h-72 sm:h-40 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue to-transparent w-full p-5 text-white text-xs sm:text-sm">
                <p className="font-semibold text-2xl">Dry Cleaning</p>
                <p className="text-sm">12x | total of $ 4,000</p>
              </div>
            </div>
          </div>

          {/* Latest Product */}
          <h3 className="text-gray-700 text-sm sm:text-base uppercase font-bold mb-2">
            Our Latest Product
          </h3>
          <div className="mb-10 rounded-lg shadow-md">
            <div className="flex mt-3 space-x-3">
              {/* Jeans */}
              <div className="relative w-1/2">
                <img
                  src="https://via.placeholder.com/240x320"
                  alt="Jeans"
                  className="w-full h-24 sm:h-28 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue to-transparent w-full p-1 text-white text-xs sm:text-sm">
                  <p className="text-xs">Dry Cleaning</p>
                  <p className="font-semibold text-2xl">Jeans</p>
                  <p className="text-xl">$ 10.00/pc</p>
                </div>
              </div>
              {/* T-Shirt */}
              <div className="relative w-1/2">
                <img
                  src="https://via.placeholder.com/240x320"
                  alt="T-Shirt"
                  className="w-full h-24 sm:h-28 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue to-transparent w-full p-1 text-white text-xs sm:text-sm">
                  <p className="text-xs">Dry Cleaning</p>
                  <p className="font-semibold text-2xl">T-Shirt</p>
                  <p className="text-xl">$ 6.00/pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
