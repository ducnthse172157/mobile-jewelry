import mockApiData from "../mock/Jewelry";

export const FetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Merge product data with gemstone and material names
      const productsWithDetails = mockApiData.products.map(product => {
        const type = product.product_types.map(type => {
          const foundtype = mockApiData.product_types.find(gem => gem.productType_id === type.productType_id);
          return foundtype ? foundtype.name : "Unknown Type";
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
