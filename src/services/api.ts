import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const fetchSalesReports = async () => {
    const response = await axios.get(`${API_BASE_URL}/sales/reports`);
    return response.data;
};

export const fetchSalesData = async () => {
    const response = await axios.get(`${API_BASE_URL}/sales`);
    return response.data;
};

export const createProduct = async (productData) => {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
};

export const createSale = async (saleData) => {
    const response = await axios.post(`${API_BASE_URL}/sales`, saleData);
    return response.data;
};

// Usage example for fetchSalesReports
export const getSalesReports = async () => {
    try {
        const reports = await fetchSalesReports();
        console.log(reports);
        return reports;
    } catch (error) {
        console.error('Error fetching sales reports:', error);
        throw error;
    }
};