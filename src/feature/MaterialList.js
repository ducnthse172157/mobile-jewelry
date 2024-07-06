import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FetchMaterial, FetchMaterialById } from '../service/ProductDetail';
import Popup from '../component/Popup';
import LoadingAnimation from '../component/Loading';

const MaterialList = () => {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const data = await FetchMaterial();
        setMaterials(data);
        setIsLoading(false); // Set loading to false once materials are fetched
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Handle loading state on error
      }
    };

    fetchMaterials();
  }, []);

  const handleMaterialPress = async (id) => {
    try {
      const material = await FetchMaterialById(id);
      setSelectedMaterial(material);
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
      <Text style={styles.title}>Materials</Text>
      {materials.map((item) => (
        <Pressable key={item._id} onPress={() => handleMaterialPress(item._id)}>
          <Text style={styles.item}>{item.name}</Text>
        </Pressable>
      ))}
      {selectedMaterial && (
        <Popup
          isVisible={isPopupVisible}
          onClose={() => setIsPopupVisible(false)}
          title={selectedMaterial.name}
        >
          <Text>Price Per Gram: {selectedMaterial.pricePerGram}</Text>
          <Text>Processing Fee: {selectedMaterial.processingFeeId.name}</Text>
          <Text>Fee Rate: {selectedMaterial.processingFeeId.feeRate}</Text>
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

export default MaterialList;
