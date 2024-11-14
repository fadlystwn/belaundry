import React, { useState } from 'react';
import useSWR from 'swr';
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList } from 'recharts';
import { fetchWithToken } from '../utils/fetchApi';
import { useAuth } from '../hooks/useAuth';
import { Report } from '../interfaces/Report';

const ProductSoldChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>('This week');
  const { token } = useAuth();

  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch data using SWR
  const { data, error } = useSWR(
    [`${apiUrl}/product/report`, token],
    ([url, token]) => fetchWithToken(url, token),
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;

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
      <hr className="border-gray-300 mb-4" />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <XAxis
            dataKey="created_at"
            tick={{ fill: '#A0AEC0' }}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            dataKey="total"
            radius={[10, 10, 0, 0]}
            fill="#A0AEC0"
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {data.map((entry: Report, index: number) => {
              return (
                <rect
                  key={`bar-${index}`}
                  x={index * 45 + 15}
                  y={300 - entry.total * 30}
                  width={35}
                  height={Number(entry.income) * 30}
                  fill={activeIndex === index ? '#3E7DAB' : '#A0AEC0'}
                  rx="10"
                  ry="10"
                />
              );
            })}
            <LabelList
              dataKey="income"
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
