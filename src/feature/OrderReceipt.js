import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";

const OrderReceipt = ({ order, navigation }) => {
  const getTotalPrice = () => {
    return order
      .reduce(
        (sum, item) =>
          sum + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const getTotalQuantity = () => {
    return order.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleCheckout = () => {
    navigation.navigate("Checkout", { order });
  };

  return (
    <View
      style={[
        t.bgPink700,
        t.p4,
        t.flexRow,
        t.justifyBetween,
        t.itemsCenter,
        t.roundedLg,
        t.shadowLg,
      ]}
    >
      <Text style={[t.textWhite, t.textLg]}>
        Total Items: {getTotalQuantity()}
      </Text>
      <Text style={[t.textWhite, t.textXl, t.fontBold]}>
       ${getTotalPrice()}
      </Text>
      <TouchableOpacity
        style={[
          t.bgWhite,
          t.pX4,
          t.pY2,
          t.roundedFull,
          t.shadowMd,
        ]}
        onPress={handleCheckout}
      >
        <Text style={[t.textPink700, t.fontBold]}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderReceipt;