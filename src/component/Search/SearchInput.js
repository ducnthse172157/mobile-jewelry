import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable, Text, Modal } from 'react-native';
import Icon from '../Icon';
import { colors, spacing, sizes, shadow } from '../../constants/theme';

const SearchInput = ({ products, onSearch, onSort }) => {
  const [search, setSearch] = useState('');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    onSearch(filteredProducts);
  };

  const handleSortOption = (option) => {
    setShowSortOptions(false);
    onSort(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <Icon icon="Search" />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Search"
          value={search}
          onChangeText={handleSearch}
        />
        <Pressable
          style={styles.filter}
          onPress={() => setShowSortOptions(true)}
        >
          <Icon icon="Filter" />
        </Pressable>
      </View>

      {/* Sort Options Modal */}
      <Modal
        visible={showSortOptions}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowSortOptions(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable
              style={styles.sortOption}
              onPress={() => handleSortOption('default')}
            >
              <Text style={styles.sortOptionText}>Default</Text>
            </Pressable>
            <Pressable
              style={styles.sortOption}
              onPress={() => handleSortOption('price_increase')}
            >
              <Text style={styles.sortOptionText}>Sort Price Increase</Text>
            </Pressable>
            <Pressable
              style={styles.sortOption}
              onPress={() => handleSortOption('price_decrease')}
            >
              <Text style={styles.sortOptionText}>Sort Price Decrease</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
    paddingBottom: spacing.l / 1.5,
  },
  inner: {
    flexDirection: 'row',
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
  },
  filter: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    paddingHorizontal: spacing.l,
    paddingBottom: spacing.l,
    paddingTop: spacing.m,
    alignItems: 'center',
  },
  sortOption: {
    paddingVertical: spacing.m,
    width: '100%',
    alignItems: 'center',
  },
  sortOptionText: {
    fontSize: sizes.base,
    color: colors.gray700,
  },
});

export default SearchInput;
