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

export const CreateOrder = async (order) => {
  try {
    const response = await axiosInstance.post('/orders', order);
    return response.data.order;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const UpdateOrder = async (id, order) => {
  try {
    const response = await axiosInstance.put(`/orders/${id}`, order); 
    return response.data.order;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

export const CreateOrderDetail = async (orderDetail) => {
  try {
    const response = await axiosInstance.post('/orderDetails', orderDetail);
    return response.data.orderDetails;
  } catch (error) {
    console.error('Error creating order detail:', error);
    throw error;
  }
};

export const CreateCustomer = async (customer) => {
  try {
    const response = await axiosInstance.post(`/customers`, customer);
    return response.data;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};

export const UpdateCustomer = async (id, customer) => {
  try {
    const response = await axiosInstance.put(`/customers/${id}`, customer);
    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
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

export const FetchStores = async () => {
  try {
    const response = await axiosInstance.get('/stores');
    return response.data.stores;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};