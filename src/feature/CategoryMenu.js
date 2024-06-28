import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "../constants/theme";
import { FetchProductTypes } from "../service/ProductDetail";

const CategoryMenu = ({
  categories,
  onCategorySelect,
  onProductTypeSelect,
}) => {
  const [currentSelected, setCurrentSelected] = useState(null);
  const [productTypes, setProductTypes] = useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState({});
  const [showPicker, setShowPicker] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  useEffect(() => {
    const fetchProductTypes = async () => {
      try {
        const types = await FetchProductTypes();
        setProductTypes(types);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductTypes();
  }, []);

  const handleCategorySelect = (index, categoryId) => {
    setCurrentSelected(index);
    onCategorySelect(categoryId);
    setCurrentCategoryId(categoryId);
    setShowPicker(true); // Show the product type picker when a category is selected
  };

  const handleProductTypeChange = (categoryId, productTypeId) => {
    setSelectedProductTypes({
      ...selectedProductTypes,
      [categoryId]: productTypeId,
    });
    onProductTypeSelect(categoryId, productTypeId);
    setShowPicker(false);
  };

  const renderProductTypeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productTypeItem}
      onPress={() => handleProductTypeChange(currentCategoryId, item._id)}
    >
      <Text style={styles.productTypeText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item, index }) => {
    const isCurrentCategory = currentCategoryId === item._id;

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleCategorySelect(index, item._id)}
        >
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                  currentSelected === index ? colors.accent : colors.white,
              },
            ]}
          >
            <Text
              style={styles.itemText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                setShowPicker(true);
                setCurrentCategoryId(item._id);
              }}
            >
              <FontAwesome
                name="angle-right"
                style={[
                  styles.icon,
                  {
                    color:
                      currentSelected === index ? colors.black : colors.white,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {isCurrentCategory && (
          <Modal visible={showPicker} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.pickerContainer}>
                <FlatList
                  data={productTypes.filter(
                    (type) => type.categoryID._id === currentCategoryId
                  )}
                  renderItem={renderProductTypeItem}
                  keyExtractor={(type) => type._id}
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setShowPicker(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 120,
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    elevation: 5,
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "600",
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: colors.accentRed,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    width: "80%",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  productTypeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    width: "100%",
    alignItems: "center",
  },
  productTypeText: {
    fontSize: 16,
    color: colors.black,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: colors.accent,
    borderRadius: 5,
  },
  closeButtonText: {
    color: colors.white,
  },
});

export default CategoryMenu;