const BalanceCard = () => {
  const svgBackground = `
   <svg width="170" height="140" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="5" r="60" fill="#2196F3"  />
    <circle cx="80" cy="27" r="12" fill="#F06263"  />
  </svg>`;

  const svgBackgroundUrl = `data:image/svg+xml,${encodeURIComponent(
    svgBackground,
  )}`;

  return (
    <>
      <div className="flex flex-col justify-center relative w-full h-40 mb-10 bg-white rounded-lg shadow-md">
        <div
          className="h-40 w-full absolute"
          style={{
            backgroundImage: `url(${svgBackgroundUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 0',
            backgroundSize: '39',
          }}
        />
        <div className="text-right ml-auto px-4 mt-10">
          <p className="text-gray-600 font-medium">Your Balance</p>
          <p className="text-4xl text-blue font-bold">$200.00</p>
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
