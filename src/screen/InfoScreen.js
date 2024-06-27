// screens/InfoScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';
import JewelryInfo from '../feature/JewelryInfo';
import { FetchProductById } from '../service/Product';
import { fetchMaterialById, fetchProductTypeById, fetchGemstoneById } from '../service/ProductDetail';
import LoadingAnimation from '../component/Loading';

const InfoScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [material, setMaterial] = useState(null);
  const [productType, setProductType] = useState(null);
  const [gemstone, setGemstone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await FetchProductById(productId);
        setProduct(productData);

        const materialData = await fetchMaterialById(productData._id);
        setMaterial(materialData);

        const productTypeData = await fetchProductTypeById(productData._id);
        setProductType(productTypeData);

        const gemstoneData = await fetchGemstoneById(productData._id);
        setGemstone(gemstoneData);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (!product) {
    return (
      <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
        <Text style={[t.text2xl, t.textPink700]}>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={[t.flex1, t.bgWhite]}>
      <ScrollView>
        <JewelryInfo product={product} material={material} productType={productType} gemstone={gemstone} />
      </ScrollView>
    </View>
  );
};

export default InfoScreen;
