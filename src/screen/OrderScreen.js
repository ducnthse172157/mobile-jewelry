import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, Animated, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss';
import OrderList from '../feature/OrderList';
import CustomerList from '../feature/CustomerList';
import { colors } from "../constants/theme";

const OrderScreen = () => {
  const [selectedSession, setSelectedSession] = useState('orders');
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: selectedSession === 'orders' ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selectedSession]);

  const underlineWidth = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const underlineLeft = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['17%', '52%'],
  });

  return (
    <View style={[t.p4, styles.container]}>
      <View style={[t.flexRow, t.justifyCenter, t.mB4, t.relative]}>
        <Pressable onPress={() => setSelectedSession('orders')}>
          <Text
            style={[
              t.mR4,
              t.p2,
              t.textLg,
              selectedSession === 'orders' ? t.textPink500 : t.textGray600,
              selectedSession === 'orders' && t.fontBold,
            ]}
          >
            Orders
          </Text>
        </Pressable>
        <Pressable onPress={() => setSelectedSession('customers')}>
          <Text
            style={[
              t.mL4,
              t.p2,
              t.textLg,
              selectedSession === 'customers' ? t.textPink500 : t.textGray600,
              selectedSession === 'customers' && t.fontBold,
            ]}
          >
            Customers
          </Text>
        </Pressable>
        <Animated.View
          style={[
            t.absolute,
            t.bottom0,
            t.h1,
            t.bgPink700,
            { width: underlineWidth, left: underlineLeft },
          ]}
        />
      </View>
      {selectedSession === 'orders' ? <OrderList /> : <CustomerList />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default OrderScreen;
