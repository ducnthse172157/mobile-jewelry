import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import Icon from './Icon';
import { colors, spacing, sizes, shadow } from '../constants/theme';

const SearchCustomer = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <Icon icon="Search" />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Search by name or phone"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.l,
    paddingBottom: spacing.l / 1.5,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  field: {
    backgroundColor: colors.white,
    paddingLeft: spacing.xl + spacing.s,
    paddingRight: spacing.m,
    paddingVertical: spacing.m,
    borderRadius: sizes.radius,
    height: 54,
    flex: 1,
    ...shadow.light,
    borderColor: colors.accentPink, 
    borderWidth: 1,
  },
});

export default SearchCustomer;
