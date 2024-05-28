// screens/InfoScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import JewelryInfo from '../feature/JewelryInfo';
import mockApiData from '../mock/Jewelry';

const InfoScreen = ({ route}) => {
  const { product } = route.params;
  const [editable, setEditable] = useState(false);
  const [jewelryData, setJewelryData] = useState(product);

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const handleUpdate = (updatedData) => {
    setJewelryData(updatedData);
  };

  const handleSave = () => {
    const index = mockApiData.products.findIndex((p) => p.id === jewelryData.id);
    if (index !== -1) {
      mockApiData.products[index] = jewelryData;
      setEditable(false);
    }
  };

  return (
    <View style={[t.flex1, t.bgWhite]}>
      <ScrollView contentContainerStyle={[t.p6]}>
        <Text style={[t.text2xl, t.textCenter, t.fontBold, t.textPink700, t.mB5]}>{product.name}</Text>
        <JewelryInfo jewelryData={jewelryData} editable={editable} onUpdate={handleUpdate} />
        <Pressable onPress={toggleEditable} style={[t.bgPink500, t.rounded, t.pY2, t.itemsCenter, t.mT4]}>
          <Text style={[t.textWhite, t.fontBold]}>{editable ? 'Cancel' : 'Edit'}</Text>
        </Pressable>
        {editable && (
          <Pressable onPress={handleSave} style={[t.bgPink500, t.rounded, t.pY2, t.itemsCenter, t.mT2]}>
            <Text style={[t.textWhite, t.fontBold]}>Save</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default InfoScreen;
