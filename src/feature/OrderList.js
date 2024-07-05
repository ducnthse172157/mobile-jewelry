import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchOrders } from '../service/Order';
import LoadingAnimation from '../component/Loading';
import { useNavigation } from '@react-navigation/native';
import OrderOption from '../component/OrderOption';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigation = useNavigation();

  const refreshOrders = async () => {
    try {
      const ordersData = await FetchOrders();
      setOrders(ordersData);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    refreshOrders().finally(() => setLoading(false));
  }, []);

  const handleOpenPopup = (order) => {
    setSelectedOrder(order);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedOrder(null);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <ScrollView style={[t.mB20]}>
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
          <Pressable onPress={() => handleOpenPopup(item)} style={[t.mT2, t.p2]}>
            <Text style={[t.textPink600, t.textCenter]}>Options</Text>
          </Pressable>
        </Pressable>
      ))}
      {selectedOrder && (
        <OrderOption
          isVisible={isPopupVisible}
          onClose={handleClosePopup}
          order={selectedOrder}
          refreshOrders={refreshOrders}
        />
      )}
    </ScrollView>
  );
};

export default OrderList;
