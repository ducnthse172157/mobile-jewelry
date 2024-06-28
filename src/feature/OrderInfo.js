import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';

const OrderInfo = ({ order, orderId }) => {
  const totalAmount = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View>
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
                {item.price}&#x20AB; x {item.quantity}
              </Text>
              <Text style={[t.textBase, t.mLAuto]}>
                {(item.price * item.quantity).toFixed(0)}&#x20AB;
              </Text>
            </View>
          </View>
        ))}
        <Text style={[t.textLg, t.fontBold, t.mT4]}>
          Total: {totalAmount.toFixed(0)}&#x20AB;
        </Text>
      </ScrollView>
    </View>
  );
};

export default OrderInfo;
