import React, { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import ProductMenu from '../feature/ProductMenu';
import OrderReceipt from '../feature/OrderReceipt';
import { t } from 'react-native-tailwindcss';
import { fetchProducts } from '../service/Product';

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  const addToOrder = (product) => {
    const existingProduct = order.find(item => item.id === product.id);
    if (existingProduct) {
      setOrder(order.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setOrder([...order, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setOrder(order.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (productId) => {
    setOrder(order.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1  } : item));
  };

  return (
    <View style={[t.flex1]}>
      <ScrollView style={[t.flex1, t.absolute, t.wFull, t.hFull]}>
        <ProductMenu products={products} addToOrder={addToOrder} navigation={navigation} />
      </ScrollView>
      <View style={[t.absolute, t.bottom0, t.wFull, t.z10]}>
        <OrderReceipt order={order} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
      </View>
    </View>
  );
};

export default ProductScreen;





