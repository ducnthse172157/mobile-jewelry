// feature/OrderReceipt.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { t } from "react-native-tailwindcss";

const OrderReceipt = ({ order, increaseQuantity, decreaseQuantity }) => {
  const getTotalPrice = () => {
    return order
      .reduce(
        (sum, item) =>
          sum + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <View style={[t.borderT, t.borderGray300, t.p4, t.bgWhite]}>
      <ScrollView>
        <Text style={[t.textXl, t.fontBold, t.textPink700]}>Order Receipt</Text>
        <FlatList
          data={order}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.mY2]}>
              <Text>
                {item.name} - {item.price} x {item.quantity}
              </Text>
              <View style={[t.flexRow, t.itemsCenter]}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={[t.bgPink700, t.pX2, t.pY1, t.rounded, t.mX1]}>
                  <Text style={[t.textWhite]}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={[t.bgPink700, t.pX2, t.pY1, t.rounded]}>
                  <Text style={[t.textWhite]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <Text style={[t.textLg, t.fontBold, t.textPink700]}>
          Total: ${getTotalPrice()}
        </Text>
      </ScrollView>
    </View>
  );
};

export default OrderReceipt;
