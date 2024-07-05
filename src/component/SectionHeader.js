import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { sizes, spacing } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const SectionHeader = ({ title, buttonTitle = 'Button' }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={[styles.button]} 
        onPress={() => navigation.navigate('ProductMenu')}
      >
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: '#F472B6',
  },
});

export default SectionHeader;
