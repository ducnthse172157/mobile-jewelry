import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import ProductMenu from "../feature/ProductMenu";
import OrderReceipt from "../feature/OrderReceipt";
import SlideUpView from "../component/Slideup";
import { t } from "react-native-tailwindcss";
import { FetchProducts } from "../service/Product";

const SearchScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    FetchProducts().then(data => setProducts(data));
  }, []);

  const addToOrder = (product) => {
    const existingProduct = order.find((item) => item.id === product.id);
    if (existingProduct) {
      setOrder(
        order.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setOrder([...order, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setOrder(
      order.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setOrder(
      order.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <View style={[t.flex1]}>
      <ScrollView style={[t.flex1, t.absolute, t.wFull, t.hFull, t.p4, t.pB20]}>
        <ProductMenu
          products={products}
          addToOrder={addToOrder}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          order={order}
          navigation={navigation}
        />
      </ScrollView>
      <SlideUpView visible={order.length > 0}>
        <OrderReceipt
          order={order}
          navigation={navigation}
        />
      </SlideUpView>
    </View>
  );
};

export default SearchScreen;
