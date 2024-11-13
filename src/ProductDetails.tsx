// src/components/ProductDetailPage.tsx
import React, { useState } from 'react';
import SvgIcon from './components/SvgIcon';

const ProductDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  // Handle input change for quantity
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="bg-lightBlue min-h-screen flex flex-col items-center">
      {/* Back Button */}
      <button className="self-start absolute text-blue z-10 top-5 left-5 rounded">
        <SvgIcon src="./icons/chevron-left.svg" width={16} />
      </button>

      {/* Product Image Card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="relative h-96">
          <img
            src="https://placehold.co/280x320"
            alt="T-Shirt"
            className="w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue to-transparent w-full p-24 text-white text-xs sm:text-sm"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 w-full max-w-md px-4">
        <button className="bg-electricBlue text-white text-sm p-2 rounded-full">
          Dry Clean
        </button>
        <h2 className="text-2xl font-bold text-blue">T-Shirt</h2>
        <p className="text-lg font-semibold text-blue">$ 6.00/pc</p>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit
          diam, lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus
          ac diam pulvinar, a auctor nunc sagittis. In euismod est est, ac
          pretium sem egestas eget.
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center justify-between w-full max-w-md px-4 mt-6">
        <button
          onClick={decrementQuantity}
          className="bg-blue text-white w-10 h-10 flex items-center justify-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        </button>

        <input
          type="number"
          className="text-lg font-semibold text-center w-20 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue p-2"
          value={quantity}
          onChange={handleQuantityChange}
          min="0"
        />

        <button
          onClick={incrementQuantity}
          className="bg-blue text-white w-10 h-10 flex items-center justify-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
