import React from "react";
import { View, Text, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import Icon from "react-native-vector-icons/FontAwesome";

const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage, onPageChange }) => {
  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pressable
          key={i}
          onPress={() => onPageChange(i)}
          style={[
            t.pX2,
            t.pY1,
            t.roundedFull,
            t.mX2,  // Add horizontal margin
            i === currentPage ? t.bgPink700 : t.bgWhite,
            i === currentPage ? t.textWhite : t.textGray900,
          ]}
        >
          <Text style={i === currentPage ? t.textWhite : t.textGray900}>
            {i}
          </Text>
        </Pressable>
      );
    }
    return pages;
  };

  return (
    <View style={[t.flexRow, t.justifyBetween, t.mT4, t.itemsCenter]}>
      <Pressable
        style={[t.pX4, t.pY2, t.roundedFull]}
        onPress={onPreviousPage}
        disabled={currentPage === 1}
      >
        <Icon name="angle-double-left" size={24} color={currentPage === 1 ? "gray" : "black"} />
      </Pressable>
      <View style={[t.flexRow, t.itemsCenter]}>
        {renderPageNumbers()}
      </View>
      <Pressable
        style={[t.pX4, t.pY2, t.roundedFull]}
        onPress={onNextPage}
        disabled={currentPage === totalPages}
      >
        <Icon name="angle-double-right" size={24} color={currentPage === totalPages ? "gray" : "black"} />
      </Pressable>
    </View>
  );
};

export default Pagination;
