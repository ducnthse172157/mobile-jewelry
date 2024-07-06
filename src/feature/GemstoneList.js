import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FetchGemstone, FetchGemstoneById } from '../service/ProductDetail';
import Popup from '../component/Popup';
import LoadingAnimation from '../component/Loading';

const GemstoneList = () => {
  const [gemstones, setGemstones] = useState([]);
  const [selectedGemstone, setSelectedGemstone] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchGemstones = async () => {
      try {
        const data = await FetchGemstone();
        setGemstones(data);
        setIsLoading(false); // Set loading to false once materials are fetched
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Handle loading state on error
      }
    };

    fetchGemstones();
  }, []);

  const handleGemstonePress = async (id) => {
    try {
      const gemstone = await FetchGemstoneById(id);
      setSelectedGemstone(gemstone);
      setIsPopupVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <LoadingAnimation size="large" color="#FF69B4" />;
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gemstones</Text>
      {gemstones.map((item) => (
        <Pressable key={item._id} onPress={() => handleGemstonePress(item._id)}>
          <Text style={styles.item}>{item.name}</Text>
        </Pressable>
      ))}
      {selectedGemstone && (
        <Popup
          isVisible={isPopupVisible}
          onClose={() => setIsPopupVisible(false)}
          title={selectedGemstone.name}
        >
          <Text>Price: {selectedGemstone.priceOfGem}</Text>
          <Text>Processing Fee: {selectedGemstone.processingFeeId.name}</Text>
          <Text>Size: {selectedGemstone.size}</Text>
        </Popup>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
    marginVertical: 2,
    color: '#bd2b77',
  },
});

export default GemstoneList;
