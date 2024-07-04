import React from "react";
import { View, Text } from "react-native";
import { t } from "react-native-tailwindcss";

const Checkout = ({ order }) => {
  const total = order.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <View style={[t.p4, t.borderB, t.borderPink600]}>
      {order.map((product) => (
        <View key={product._id} style={[t.flexRow, t.justifyBetween, t.mB2]}>
          <Text style={[t.textPink800]}>
            {product.name} x {product.quantity}
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