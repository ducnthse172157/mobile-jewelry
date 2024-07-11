import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const Checkout = ({ orders, updateQuantity, removeProduct }) => {
  const total = orders.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const truncateProductName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.substring(0, maxLength)}...`;
    }
    return name;
  };

  return (
    <View style={[t.p4, t.borderB, t.borderPink600]}>
      {orders.map((product) => (
        <View key={product._id}>
          <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.mB2]}>
            <Text style={[t.textPink800, t.flex1]}>
              {truncateProductName(product.name, 20)}
            </Text>

            <View style={[t.flexRow, t.itemsCenter]}>
              <TouchableOpacity
                onPress={() => updateQuantity(product._id, -1)}
                style={[t.bgPink200, t.p2, t.mR2]}
              >
                <Icon name="minus" size={12} color="black" />
              </TouchableOpacity>
              <Text style={[t.textPink800, t.textCenter]}>
                {product.quantity}
              </Text>
              <TouchableOpacity
                onPress={() => updateQuantity(product._id, 1)}
                style={[t.bgPink200, t.p2, t.mR2]}
              >
                <Icon name="plus" size={12} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeProduct(product._id)}>
                <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[t.textPink800, t.flex1, t.textRight]}>
            {product.price * product.quantity}&#x20AB;
          </Text>
        </View>
      ))}
      <Text style={[t.textPink800, t.textLg, t.fontBold]}>
        Total: {total}&#x20AB;
      </Text>
    </View>
  );
};

export default Checkout;
