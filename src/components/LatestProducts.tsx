import React from 'react';
import { Product } from '../interfaces/Product';

type LatestProducts = {
  data: Product[];
};
const LatestProducts: React.FC<LatestProductsProps> = ({ data }) => {
  return (
    <div className="mb-10 rounded-lg shadow-md">
      <h3 className="text-blue text-sm sm:text-base uppercase font-bold mb-2">
        Our Latest Product
      </h3>
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
  );
};

export default LatestProducts;
