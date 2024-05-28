import mockApiData from "../mock/Jewelry";


export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiData);
    }, 1000); 
  });
};
