import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";
import { updateOrders } from "../service/Order";
import { useOrders } from '../context/OrderContext';

const Checkout = ({ order, navigation }) => {
  const [moneyReceived, setMoneyReceived] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [orderId, setOrderId] = useState("");
  const { refreshOrders } = useOrders();

  useEffect(() => {
    const generateOrderId = () => Math.random().toString(36).substr(2, 9);
    setOrderId(generateOrderId());
  }, []);

  const totalAmount = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const returnAmount = (parseFloat(moneyReceived) - totalAmount).toFixed(2);

  const handleMoneyReceivedChange = (value) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    setMoneyReceived(numericValue);
  };

  const resetStateAndNavigateHome = async () => {
    const newOrder = {
      orderId,
      customerName,
      items: order,
      totalAmount,
      moneyReceived: parseFloat(moneyReceived),
      returnAmount: parseFloat(returnAmount)
    };

    updateOrders(newOrder);
    await refreshOrders(); // Refresh the orders after adding a new order

    setMoneyReceived("");
    setCustomerName("");
    navigation.navigate("Home");
  };

  return (
    <View style={[t.flex1, t.p4, t.bgWhite]}>
      <Text style={[t.text2xl, t.fontBold, t.textCenter, t.textPink700, t.mB4]}>
        Checkout
      </Text>
      <ScrollView style={[t.mB4]}>
        <Text style={[t.textLg, t.textCenter, t.fontBold, t.mB2]}>
          Order ID: {orderId}
        </Text>
        <View style={[t.wFull, t.borderT, t.borderGray300, t.mY2]} />
        {order.map((item, index) => (
          <View key={index} style={[t.mY2]}>
            <Text style={[t.textBase, t.fontBold]}>{item.name}</Text>
            <Text style={[t.textBase, t.fontBold]}>{item.id}</Text>
            <View style={[t.flexRow, t.justifyBetween]}>
              <Text style={[t.textBase]}>
                ${item.price} x {item.quantity}
              </Text>
              <Text style={[t.textBase, t.mLAuto]}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={[t.wFull, t.borderT, t.borderGray300, t.mY2]} />
      <TextInput
        style={[
          t.borderB,
          t.borderGray400,
          t.rounded,
          t.p2,
          t.textPink700,
          t.mY2,
          t.wFull,
        ]}
        placeholder="Enter customer name"
        value={customerName}
        onChangeText={setCustomerName}
      />
      <View style={[t.wFull, t.borderT, t.borderGray300, t.mY2]} />
      <View style={[t.flexRow, t.itemsCenter]}>
        <Text style={[t.textLg, t.fontBold]}>
          Total: ${totalAmount.toFixed(2)}
        </Text>
        <TextInput
          style={[
            t.borderB,
            t.borderGray400,
            t.rounded,
            t.p2,
            t.textPink700,
            t.mY2,
            t.mLAuto,
            t.w1_2,
            t.textRight,
          ]}
          placeholder="Enter money received"
          keyboardType="numeric"
          value={moneyReceived}
          onChangeText={handleMoneyReceivedChange}
        />
      </View>
      <Text style={[t.textLg, t.fontBold, t.textPink700, t.mB4, t.textRight]}>
        Return Amount: ${isNaN(returnAmount) ? "0.00" : returnAmount}
      </Text>
      <Pressable
        style={[t.bgPink700, t.roundedFull, t.p4, t.itemsCenter]}
        onPress={resetStateAndNavigateHome}
      >
        <Text style={[t.textWhite, t.fontBold]}>Complete Transaction</Text>
      </Pressable>
    </View>
  );
};

export default Checkout;
