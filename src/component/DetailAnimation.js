import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../constants/theme';
import * as Animatable from 'react-native-animatable';

const DetailAnimation = ({ children }) => {
  return (
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        easing="ease-in-out"
        duration={400}
      >
        {children}
      </Animatable.View>

  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
});

export default DetailAnimation;
