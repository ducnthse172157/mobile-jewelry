// service/ProductType.js
import axiosInstance from './Auth'; // Adjust the path if needed

export const FetchProductTypes = async () => {
  try {
    const response = await axiosInstance.get('/producttype');
    if (response.data.success) {
      return response.data.productTypes;
    } else {
      throw new Error('Failed to fetch product types');
    }
  } catch (error) {
    console.error('Failed to fetch product types:', error);
    throw error;
  }
};

export const FetchCategory = async () => {
  try {
    const response = await axiosInstance.get('/category');
    if (response.data.success) {
      return response.data.categories; // Corrected from `productTypes` to `categories`
    } else {
      throw new Error('Failed to fetch categories');
    }
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
};
