import React from 'react';
import BalanceCard from './components/BalanceCard';
import LatestProducts from './components/LatestProducts';
import PreviousOrder from './components/PreviousOrder';
import MostOrdered from './components/MostOrdered';
import { Product } from './interfaces/Product';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: React.FC = () => {
  const svgBackground = `
  <svg width="375" height="255" viewBox="0 0 375 255" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="183.5" cy="53" rx="283.5" ry="202" fill="#F36868"/>
    </svg>
  `;

  const svgBackgroundUrl = `data:image/svg+xml,${encodeURIComponent(
    svgBackground,
  )}`;

  // Access environment variable with Vite's `import.meta.env`
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data, error } = useSWR<Product[]>(`${apiUrl}/product`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
        <div className="relative z-10 top-10">
          <h1 className="text-white mb-3 text-xl">Welcome John</h1>
          <BalanceCard />
          <PreviousOrder />
          <MostOrdered />
          <LatestProducts data={data} />
        </div>
      </div>
    </>
  );
};

export default Home;