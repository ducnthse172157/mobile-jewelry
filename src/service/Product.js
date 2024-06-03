import mockApiData from "../mock/Jewelry";


export const FetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiData.products);
    }, 1000); 
  });
};
