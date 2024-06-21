// Define the FetchProducts function to get the product data from the API
export const FetchProducts = () => {
  return new Promise((resolve, reject) => {
    fetch("https://baitapdeploy-production.up.railway.app/products")
      .then(response => response.json())
      .then(data => {
        const productsWithDetails = data.products.map(product => {
          const type = product.productTypeID ? product.productTypeID.name : "Unknown Type";
          const gemstone = product.gemstoneID ? product.gemstoneID.name : "Unknown Gemstone";
          const material = product.materialID ? product.materialID.name : "Unknown Material";
          const images = product.imageIDs.map(img => img.imageLink);

          return {
            ...product,
            type,
            gemstone,
            material,
            images,
          };
        });

        resolve(productsWithDetails);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        reject(error);
      });
  });
};
