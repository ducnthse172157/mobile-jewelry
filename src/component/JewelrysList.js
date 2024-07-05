import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, shadow, sizes, spacing } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { FetchProducts } from '../service/Product';
import LoadingAnimation from './Loading';

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;

const JewelrysList = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await FetchProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  const handleProductPress = (product) => {
    navigation.navigate('Info', { productId: product._id });
  };

  const renderProducts = () => {
    // Sort products by the most paid logic goes here
    const sortedProducts = products.sort((a, b) => b.mostPaid - a.mostPaid).slice(0, 4);

    return sortedProducts.map((item, index) => (
      <TouchableOpacity
        style={styles.cardContainer}
        key={item._id}
        onPress={() => handleProductPress(item)}
      >
        <View style={[styles.card, shadow.light]}>
          <SharedElement id={`product.${item._id}.image`}>
            <View style={styles.imageBox}>
              <Image style={styles.image} source={{ uri: item.imageIDs[0].imageLink }} />
            </View>
          </SharedElement>
          <View style={styles.footer}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  if (loading) {
    return <LoadingAnimation />; // Placeholder for loading state
  }

  return <View style={styles.container}>{renderProducts()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 30,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  footer: {
    height: CARD_HEIGHT - 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
    height: CARD_HEIGHT - 60,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: colors.primary,
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default JewelrysList;
