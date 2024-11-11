import React from 'react';

const TopSellingProduct: React.FC = () => {
  const data = [
    { name: 'Item A', value: 120.0 },
    { name: 'Item B', value: 80.0 },
    { name: 'Item C', value: 76.0 },
  ];

  return (
    <div className="p-4 rounded-lg shadow bg-white mt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Top selling product</h2>
        <select
          defaultValue="This week"
          className="border border-gray-300 rounded p-1 text-gray-700"
        >
          <option value="This week">This week</option>
          <option value="Last week">Last week</option>
          <option value="This month">This month</option>
          <option value="Last month">Last month</option>
        </select>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-gray-500">Name</th>
            <th className="text-right text-gray-500">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="py-2 text-gray-700">{item.name}</td>
              <td className="py-2 text-right text-gray-700">
                ${item.value.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProduct;
