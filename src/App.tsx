import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import SalesReport from './components/SalesReport/SalesReport';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Sales Management App</h1>
        <ProductList />
        <SalesReport />
      </main>
    </div>
  );
};

export default App;