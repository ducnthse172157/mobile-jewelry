import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Modal, TextInput } from 'react-native';
import Icon from './Icon';
import { colors, spacing, sizes, shadow } from '../constants/theme';

const SearchOrder = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleSearch = () => {
    onSearch(status, search);
  };

  const handleSortOption = (option) => {
    setShowSortOptions(false);
    setStatus(option);
    onSearch(option, search);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <Icon icon="Search" />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Search by customer name"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
        <Pressable style={styles.filter} onPress={() => setShowSortOptions(true)}>
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
            <Pressable style={styles.sortOption} onPress={() => handleSortOption('')}>
              <Text style={styles.sortOptionText}>All</Text>
            </Pressable>
            <Pressable style={styles.sortOption} onPress={() => handleSortOption('pending')}>
              <Text style={styles.sortOptionText}>Pending</Text>
            </Pressable>
            <Pressable style={styles.sortOption} onPress={() => handleSortOption('paid')}>
              <Text style={styles.sortOptionText}>Paid</Text>
            </Pressable>
            <Pressable style={styles.sortOption} onPress={() => handleSortOption('not enough')}>
              <Text style={styles.sortOptionText}>Not Enough</Text>
            </Pressable>
            <Pressable style={styles.sortOption} onPress={() => handleSortOption('cancelled')}>
              <Text style={styles.sortOptionText}>Cancelled</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

export default SearchOrder;
