# Vite Project Setup

This project is set up with Vite, React, and React Router. The following guide will help you get started and provide an overview of the project's routes and their functionalities.

## Getting Started

### Prerequisites

- **Node.js** (version 14.18+ recommended)
- **npm** (preferred package manager)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/fadlystwn/belaundry.git
   cd belaundry
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

The main pages in this project include:

- **HomeDashboard**: The dashboard page displaying home-related content.
- **ProductDashboard**: The main products dashboard for managing product data.
- **Home**: The landing page or homepage of the application.
- **InvoicePage**: A page to view or manage invoices.
- **ProductDetailPage**: A detailed view of a specific product.
- **LoginPage**: The login page for user authentication.

### Routing

The project uses `react-router-dom` for client-side routing. Here is an overview of the routes configured:

### Available Routes

| Path               | Component           | Description                                     |
| ------------------ | ------------------- | ----------------------------------------------- |
| `/login`           | `LoginPage`         | User login page                                 |
| `/dashboard`       | `HomeDashboard`     | Main dashboard with home-related information    |
| `/`                | `Home`              | Homepage or landing page                        |
| `/products`        | `ProductDashboard`  | Product dashboard displaying a list of products |
| `/product-details` | `ProductDetailPage` | Detailed view of an individual product          |
| `/invoice`         | `InvoicePage`       | Invoice page for managing invoices              |

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.

## Additional Information

For more details on Vite setup and advanced configurations, refer to the [Vite Documentation](https://vitejs.dev/guide/).
