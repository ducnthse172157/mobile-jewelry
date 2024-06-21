// screens/InfoScreen.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';
import JewelryInfo from '../feature/JewelryInfo';

const InfoScreen = ({ route}) => {
  const { product } = route.params;


  return (
    <View style={[t.flex1, t.bgWhite]}>
      <ScrollView>
        <JewelryInfo product={product} />
      </ScrollView>
    </View>
  );
};

export default InfoScreen;
