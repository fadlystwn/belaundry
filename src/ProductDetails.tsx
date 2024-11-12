// src/components/ProductDetailPage.tsx
import React, { useState } from 'react';

const ProductDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="bg-blue-50 min-h-screen p-4 flex flex-col items-center">
      {/* Back Button */}
      <button className="self-start text-blue-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Product Image Card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="relative">
          <img
            src="https://via.placeholder.com/300"
            alt="T-Shirt"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-b from-blue-500 to-transparent w-full h-1/2 rounded-t-lg" />
          <div className="absolute top-4 left-4 text-white">
            <p className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
              Dry Clean
            </p>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 w-full max-w-md px-4">
        <h2 className="text-2xl font-bold text-blue-600">T-Shirt</h2>
        <p className="text-lg font-semibold text-blue-500">$ 6.00/pc</p>
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
          className="bg-blue-100 text-blue-500 w-10 h-10 flex items-center justify-center rounded-lg"
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
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="bg-blue-100 text-blue-500 w-10 h-10 flex items-center justify-center rounded-lg"
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
