// service/ProductDetails.js
import axios from 'axios';


const BASE_URL = 'https://baitapdeploy-production.up.railway.app';

export const fetchDetailByApi = async (apiLink, token) => {
  if (!apiLink.startsWith('http')) {
    throw new Error('Invalid API link');
  }

  try {
    const response = await axios.get(apiLink, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching detail:', error);
    throw error;
  }
};


export const fetchMaterialById = async (id, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/material/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching material:', error.message);
    throw new Error('Failed to fetch material');
  }
};

export const fetchProductTypeById = async (id, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/producttype/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product type:', error.message);
    throw new Error('Failed to fetch product type');
  }
};

export const fetchGemstoneById = async (id, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/gemstone/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching gemstone:', error.message);
    throw new Error('Failed to fetch gemstone');
  }
};

export const fetchGemstones = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/gemstone`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching gemstones:', error.message);
    throw new Error('Failed to fetch gemstones');
  }
};

export const fetchMaterials = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/material`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching materials:', error.message);
    throw new Error('Failed to fetch materials');
  }
};

export const fetchProductTypes = async () => {
  try {
    const token = await getToken(); // Retrieve token from AuthService
    const response = await axios.get(`${BASE_URL}/producttype`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product types:', error.message);
    throw new Error('Failed to fetch product types');
  }
};


export const fetchCategories = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    throw new Error('Failed to fetch categories');
  }
};