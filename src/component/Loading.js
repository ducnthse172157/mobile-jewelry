import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { t } from 'react-native-tailwindcss';

const LoadingAnimation = ({ size = 'large', color = '#FF69B4' }) => {
  return (
    <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default LoadingAnimation;
