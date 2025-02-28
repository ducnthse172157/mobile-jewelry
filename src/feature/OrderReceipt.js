import React from "react";
import { View, Text, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import { RFValue } from "react-native-responsive-fontsize";

const OrderReceipt = ({ order, navigation }) => {
  const getTotalPrice = () => {
    return order
      .reduce(
        (sum, item) =>
          sum + parseInt(item.price) * item.quantity,
        0
      )
      .toFixed(0);
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
      <Text style={[{ fontSize: RFValue(14) }, t.textWhite]}>
        Total Items: {getTotalQuantity()}
      </Text>
      <Text style={[{ fontSize: RFValue(14) }, t.textWhite, t.fontBold]}>
        {getTotalPrice()}&#x20AB;
      </Text>
      <Pressable
        style={[
          t.mL1,
          t.bgWhite,
          t.pX4,
          t.pY2,
          t.roundedFull,
          t.shadowMd,
        ]}
        onPress={handleCheckout}
      >
        <Text style={[{ fontSize: RFValue(10) }, t.textPink700, t.fontBold]}>
          Checkout
        </Text>
      </Pressable>
    </View>
  );
};

export default OrderReceipt;
