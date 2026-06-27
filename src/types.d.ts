declare module 'axios' {
  import axios from 'axios';
  export default axios;
}

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Sale {
  id: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  date: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'staff';
}

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}