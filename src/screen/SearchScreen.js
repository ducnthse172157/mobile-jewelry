import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";
import ProductMenu from "../feature/ProductMenu";
import OrderReceipt from "../feature/OrderReceipt";
import SlideUpView from "../component/Slideup";
import { FetchProducts } from "../service/Product";
import LoadingAnimation from "../component/Loading";

const SearchScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
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
      order
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  if (loading) {
    return <LoadingAnimation />;
  }

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
        <OrderReceipt order={order} navigation={navigation} />
      </SlideUpView>
    </View>
  );
};

export default SearchScreen;
