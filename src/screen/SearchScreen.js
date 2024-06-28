import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { t } from "react-native-tailwindcss";
import ProductMenu from "../feature/ProductMenu";
import OrderReceipt from "../feature/OrderReceipt";
import SlideUpView from "../component/Slideup";
import { FetchProducts } from "../service/Product";
import LoadingAnimation from "../component/Loading";
import MainHeader from "../component/MainHeader";
import SearchInput from "../component/Search/SearchInput";
import { colors } from "../constants/theme";

const SearchScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const addToOrder = (product) => {
    const existingProduct = order.find((item) => item._id === product._id);
    if (existingProduct) {
      setOrder(
        order.map((item) =>
          item._id === product._id
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
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setOrder(
      order
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const resetOrder = () => {
    setOrder([]);
  };

  const handleSearch = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <View style={styles.container}>
      <MainHeader title="Search" />
        <SearchInput products={products} onSearch={handleSearch} />
      <ScrollView
        style={[t.flex1, t.wFull, t.hFull, t.p4, t.pB20]}
        showsVerticalScrollIndicator={false}
      >
        
        <ProductMenu
          products={filteredProducts}
          addToOrder={addToOrder}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          order={order}
          resetOrder={resetOrder}
          navigation={navigation}
        />
      </ScrollView>
      <SlideUpView visible={order.length > 0}>
        <OrderReceipt order={order} navigation={navigation} />
      </SlideUpView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
  },
});

export default SearchScreen;
