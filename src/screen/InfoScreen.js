import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';
import JewelryInfo from '../feature/JewelryInfo';
import { FetchProductById } from '../service/Product';
import LoadingAnimation from '../component/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InfoScreen = ({ route }) => {
  const { productId} = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');

        if (!token) {
          throw new Error('Token not found');
        }

        const productData = await FetchProductById(productId);
        setProduct(productData);
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
        <Text style={[t.text2xl, t.textPink700]}>Product info not found</Text>
      </View>
    );
  }


  return (
    <View style={[t.flex1, t.bgWhite]}>
      <ScrollView>
        <JewelryInfo product={product}/>
      </ScrollView>
    </View>
  );
};

export default InfoScreen;
