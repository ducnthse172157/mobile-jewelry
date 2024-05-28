// components/Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss';

const Card = ({ children }) => {
  return (
    <View style={[styles.card, t.p4, t.mY2, t.bgWhite, t.roundedLg, t.shadowLg]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Custom styles if needed
  },
});

export default Card;
