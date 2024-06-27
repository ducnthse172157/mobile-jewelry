// service/ProductDetails.js
import axios from 'axios';

const BASE_URL = 'https://baitapdeploy-production.up.railway.app';

export const fetchMaterialById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/material/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching material:', error.message);
    throw new Error('Failed to fetch material');
  }
};

export const fetchProductTypeById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/producttype/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product type:', error.message);
    throw new Error('Failed to fetch product type');
  }
};

export const fetchGemstoneById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/gemstone/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gemstone:', error.message);
    throw new Error('Failed to fetch gemstone');
  }
};
