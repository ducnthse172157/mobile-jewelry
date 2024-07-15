import axios from 'axios';

const API_BASE_URL = 'https://baitapdeploy-production.up.railway.app/products';

export const FetchProducts = async ({ page, sl, search, sort } = {}) => {
  try {
    const params = {};
    if (page !== undefined) params.page = page;
    if (sl !== undefined) params.sl = sl;
    if (search !== undefined) params.search = search;
    if (sort !== undefined) params.sort = sort;

    const response = await axios.get(API_BASE_URL, { params });
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const FetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    const product = response.data.product;

    if (!product) {
      throw new Error('Product not found');
    }

    const productDetails = {
      ...product,
    };

    return productDetails;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
