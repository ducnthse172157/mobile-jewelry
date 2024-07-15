import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, sizes } from '../constants/theme';

const Card = ({ children, style }) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderColor: colors.accentPink, 
    borderWidth: 1,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  
  },
});

export default Card;
