import { createBrowserRouter } from 'react-router-dom';
import HomeDashboard from './HomeDashboard';
import ProductDashboard from './ProductDashboard';
import MobileDashboard from './MobileDashboard';
import InvoicePage from './Invoice';
import ProductDetailPage from './ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeDashboard />,
  },
  {
    path: '/dashboard',
    element: <MobileDashboard />,
  },
  {
    path: '/products',
    element: <ProductDashboard />,
  },
  {
    path: '/product-details',
    element: <ProductDetailPage />,
  },
  {
    path: '/invoice',
    element: <InvoicePage />,
  },
]);
