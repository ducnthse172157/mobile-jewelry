// src/service/Order.js
import axiosInstance from './Auth';

export const FetchOrders = async () => {
  try {
    const response = await axiosInstance.get('/orders');
    return response.data.orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const FetchOrderById = async (id) => {
  try {
    const response = await axiosInstance.get(`/orders/${id}`);
    return response.data.order; // Return the order object directly
  } catch (error) {
    console.error('Error fetching order by id:', error);
    throw error;
  }
};

export const FetchCustomers = async () => {
    try {
      const response = await axiosInstance.get('/customers');
      return response.data;
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
};

export const FetchCustomerById = async (id) => {
  try {
    const response = await axiosInstance.get(`/customers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customer by ID:', error);
    throw error;
  }
};

export const FetchPayment = async () => {
  try {
    const response = await axiosInstance.get('/payments');
    return response.data;
  } catch (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }
};