import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, shadow, sizes } from '../constants/theme';

const Card = ({ children, style }) => {
  return (
    <View style={[styles.card, shadow.light, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
});

export default Card;
