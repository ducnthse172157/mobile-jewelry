import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { t } from "react-native-tailwindcss";
import ProductMenu from "../feature/ProductMenu";
import OrderReceipt from "../feature/OrderReceipt";
import SlideUpView from "../component/Slideup";
import { FetchProducts } from "../service/Product";
import { FetchCategory } from "../service/ProductDetail";
import LoadingAnimation from "../component/Loading";
import MainHeader from "../component/MainHeader";
import SearchInput from "../component/Search/SearchInput";
import CategoryMenu from "../feature/CategoryMenu";
import { colors } from "../constants/theme";

const SearchScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productData, categoryData] = await Promise.all([
          FetchProducts(),
          FetchCategory(),
        ]);
        setProducts(productData);
        setFilteredProducts(productData);
        setCategories(categoryData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Reset product type selection when category changes
    setSelectedProductType('');
    filterProducts(categoryId, '');
  };

  const handleProductTypeSelect = (categoryId, productTypeId) => {
    setSelectedProductType(productTypeId);
    filterProducts(categoryId, productTypeId);
  };

  const filterProducts = (categoryId, productTypeId) => {
    let filtered = products;
    if (categoryId && categoryId !== 'all') {
      filtered = filtered.filter(product => product.productTypeID.categoryID._id === categoryId);
    }
    if (productTypeId && productTypeId !== 'all') {
      filtered = filtered.filter(product => product.productTypeID._id === productTypeId);
    }
    setFilteredProducts(filtered);
  };

  const handleSearch = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  const handleSort = (option) => {
    let sortedProducts = [...filteredProducts];
    switch (option) {
      case 'price_increase':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_decrease':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        setFilteredProducts(products);
        break;
    }
    setFilteredProducts(sortedProducts);
  };

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

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedProductType('');
    setFilteredProducts(products);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <View style={styles.container}>
      <MainHeader title="Search" />
      <SearchInput
        products={products}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      
      <ScrollView
        style={[t.flex1, t.wFull, t.hFull, t.p4, t.pB20]}
        showsVerticalScrollIndicator={false}
      >
        <CategoryMenu 
          categories={categories} 
          onCategorySelect={handleCategorySelect} 
          onProductTypeSelect={handleProductTypeSelect} 
        />
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
