// product.js
import mockApiData from "../mock/Jewelry";
import orders from "../mock/order"; // Your fake API data

export const FetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Merge product data with gemstone and material names
      const productsWithDetails = mockApiData.products.map(product => {
        const type = product.product_types.map(type => {
          const foundType = mockApiData.product_types.find(gem => gem.productType_id === type.productType_id);
          return foundType ? foundType.name : "Unknown Type";
        });

        const gemstones = product.gemstones.map(gemstone => {
          const foundGemstone = mockApiData.gemstones.find(gem => gem.gemstone_id === gemstone.gemstone_id);
          return foundGemstone ? foundGemstone.name : "Unknown Gemstone";
        });

        const materials = product.materials.map(material => {
          const foundMaterial = mockApiData.materials.find(mat => mat.material_id === material.material_id);
          return foundMaterial ? foundMaterial.material_name : "Unknown Material";
        });

        return {
          ...product,
          type,
          gemstones,
          materials
        };
      });

      resolve(productsWithDetails);
    }, 1000);
  });
};

export const updateOrders = (newOrder) => {
  // Ensure orders is an array
  if (!Array.isArray(orders)) {
    orders = []; // Initialize if not already an array
  }
  orders.push(newOrder);
  console.log('Updated orders:', orders);
};

export const fetchOrders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, 1000);
  });
};
