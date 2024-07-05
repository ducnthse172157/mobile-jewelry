import React from "react";
import { View, Text, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import Icon from "react-native-vector-icons/FontAwesome";

const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage, onPageChange }) => {
  const renderPageNumbers = () => {
    let pages = [];
    const limit = 5; // Limit of how many page numbers to display

    // Calculate the start and end of the page numbers to display
    let start = Math.max(1, currentPage - Math.floor(limit / 2));
    let end = Math.min(totalPages, start + limit - 1);

    if (end - start + 1 < limit) {
      start = Math.max(1, end - limit + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <Pressable
          key={i}
          onPress={() => onPageChange(i)}
          style={[
            t.fontMedium,
            t.pX2,
            t.pY1,
            t.roundedFull,
            t.mX2,
            { backgroundColor: i === currentPage ? "#F472B6" : "transparent" }, // Highlight current page
          ]}
        >
          <Text style={[t.fontBold, i === currentPage ? t.textWhite : t.textGray900]}>
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
        <Icon name="angle-double-left" size={24} color={currentPage === 1 ? "#ddd" : "black"} />
      </Pressable>
      <View style={[t.flexRow, t.itemsCenter]}>
        {renderPageNumbers()}
      </View>
      <Pressable
        style={[t.pX4, t.pY2, t.roundedFull]}
        onPress={onNextPage}
        disabled={currentPage === totalPages}
      >
        <Icon name="angle-double-right" size={24} color={currentPage === totalPages ? "#ddd" : "black"} />
      </Pressable>
    </View>
  );
};

export default Pagination;
