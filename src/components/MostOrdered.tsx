// src/components/MostOrdered.tsx
import React from 'react';

const MostOrdered: React.FC = () => {
  return (
    <div className="mb-10 rounded-lg shadow-md">
      <h3 className="text-blue text-sm sm:text-base uppercase font-bold">
        Your Most Ordered
      </h3>
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
  );
};

export default MostOrdered;
