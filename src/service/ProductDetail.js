// service/ProductType.js
import axiosInstance from './Auth'; 

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
      return response.data.categories; 
    } else {
      throw new Error('Failed to fetch categories');
    }
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
};

export const FetchMaterial = async () => {
  try {
    const response = await axiosInstance.get('/material');
    if (response.data.success) {
      return response.data.materials; 
    } else {
      throw new Error('Failed to fetch materials');
    }
  } catch (error) {
    console.error('Failed to fetch materials:', error);
    throw error;
  }
};

export const FetchProductTypeById = async () => {
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

export const FetchCategoryById = async () => {
  try {
    const response = await axiosInstance.get('/category');
    if (response.data.success) {
      return response.data.categories; 
    } else {
      throw new Error('Failed to fetch categories');
    }
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
};

export const FetchMaterialById = async () => {
  try {
    const response = await axiosInstance.get('/material');
    if (response.data.success) {
      return response.data.materials; 
    } else {
      throw new Error('Failed to fetch materials');
    }
  } catch (error) {
    console.error('Failed to fetch materials:', error);
    throw error;
  }
};
