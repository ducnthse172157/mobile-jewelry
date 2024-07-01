// src/service/Order.js
import axiosInstance from './Auth';

export const FetchCustomers = async () => {
    try {
      const response = await axiosInstance.get('/customers');
      return response.data;
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
};