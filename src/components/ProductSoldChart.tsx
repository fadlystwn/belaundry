import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const data = [
  { date: '11/05', items: 4 },
  { date: '12/05', items: 6 },
  { date: '13/05', items: 3 },
  { date: '14/05', items: 7 },
  { date: '15/05', items: 8 },
  { date: '16/05', items: 5 },
  { date: '17/05', items: 6 },
  { date: '18/05', items: 7 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow rounded">
        <p className="text-gray-700">{`${payload[0].value} Items`}</p>
      </div>
    );
  }
  return null;
};

const ProductSoldChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>('This week');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="p-4 rounded-lg shadow bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Product Sold</h2>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border border-gray-300 rounded p-1 text-gray-700"
        >
          <option value="This week">This week</option>
          <option value="Last week">Last week</option>
          <option value="This month">This month</option>
          <option value="Last month">Last month</option>
        </select>
      </div>
      <hr className="border-gray-300 mb-4" /> {/* Divider added here */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <XAxis
            dataKey="date"
            tick={{ fill: '#A0AEC0' }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="items"
            radius={[10, 10, 0, 0]}
            fill="#A0AEC0"
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {data.map((entry, index) => (
              <rect
                key={`bar-${index}`}
                x={index * 45 + 15}
                y={300 - entry.items * 30}
                width={35}
                height={entry.items * 30}
                fill={activeIndex === index ? '#3E7DAB' : '#A0AEC0'}
                rx="10"
                ry="10"
              />
            ))}
            <LabelList
              dataKey="items"
              position="top"
              fill="#4A5568"
              fontSize={12}
              content={({ x, y, value }) =>
                value === 8 ? (
                  <text x={x} y={y} dy={-4} textAnchor="middle" fill="#4A5568">
                    {value} Items
                  </text>
                ) : null
              }
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductSoldChart;
