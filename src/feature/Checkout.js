import React from "react";
import { View, Text } from "react-native";
import { t } from "react-native-tailwindcss";

const Checkout = ({ order }) => {
  const total = order.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const truncateProductName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.substring(0, maxLength)}...`;
    } else {
      return name;
    }
  };

  return (
    <View style={[t.p4, t.borderB, t.borderPink600]}>
      {order.map((product) => (
        <View key={product._id} style={[t.flexRow, t.justifyBetween, t.mB2]}>
          <Text style={[t.textPink800]}>
            {truncateProductName(product.name, 20)} x {product.quantity}
          </Text>
          <Text style={[t.textPink800]}>
            {product.price * product.quantity}&#x20AB;
          </Text>
        </View>
      ))}
      <Text style={[t.textPink800, t.textLg, t.fontBold]}>Total: {total}&#x20AB;</Text>
    </View>
  );
};

export default Checkout;
