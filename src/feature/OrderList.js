import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchOrders } from '../service/Order';
import LoadingAnimation from '../component/Loading';
import { useNavigation } from '@react-navigation/native';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const ordersData = await FetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <ScrollView contentContainerStyle={[t.m4]}>
      <Text style={[t.textCenter, t.text2xl, t.fontBold, t.mB4, t.textPink700]}>Order List</Text>
      {orders.map((item) => (
        <Pressable
          key={item._id}
          onPress={() => navigation.navigate('Order Detail', { orderId: item._id })}
          style={[t.p4, t.borderB, t.borderGray300]}
        >
          <Text style={[t.textLg, t.textPink700]}>Order ID: {item._id}</Text>
          <Text>Total Price: {item.totalPrice}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Description: {item.description}</Text>
          <Text>Status: {item.status}</Text>
          <Text>Cash Paid: {item.cashPaid}</Text>
          <Text>Bank Paid: {item.bankPaid}</Text>
          <Text>Remaining Amount: {item.remainingAmount}</Text>
          <Text>Excess Amount: {item.excessAmount}</Text>
          <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default OrderList;
