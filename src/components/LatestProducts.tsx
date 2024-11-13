import React from 'react';
import { Product } from '../interfaces/Product';

type LatestProducts = {
  data: Product[];
};

const LatestProducts: React.FC<LatestProducts> = ({ data }) => {
  return (
    <div className="mb-10 rounded-lg shadow-md">
      <h3 className="text-blue text-sm sm:text-base uppercase font-bold mb-2">
        Our Latest Product
      </h3>
      <div className="flex mt-3 space-x-3">
        {data &&
          data.length > 0 &&
          data.map((product, index) => (
            <div key={index} className="relative w-1/2">
              <img
                src={product.image || 'https://via.placeholder.com/240x320'}
                alt={product.name}
                className="w-full h-24 sm:h-28 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue to-transparent w-full p-1 text-white text-xs sm:text-sm">
                <p className="text-xs">{product.category_id}</p>
                <p className="font-semibold text-2xl">{product.name}</p>
                <p className="text-xl">${product.price}/pc</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LatestProducts;
