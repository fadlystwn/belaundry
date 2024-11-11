import DashboardLayout from './components/DashboardLayout';
import ProductSoldChart from './components/ProductSoldChart';
import TopSellingProduct from './components/TopSelllingProduct';

const HomeDashboard = () => {
  return (
    <DashboardLayout>
      <ProductSoldChart />
      <TopSellingProduct />
    </DashboardLayout>
  );
};

export default HomeDashboard;
