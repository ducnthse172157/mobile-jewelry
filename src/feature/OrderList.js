import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchOrders } from '../service/Order'; // Import the FetchOrders function
import LoadingAnimation from '../component/Loading';
import { useNavigation } from '@react-navigation/native';
import OrderOption from '../component/OrderOption';
import SearchOrder from '../component/SearchOrder'; // Import the SearchOrder component

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigation = useNavigation();

  const refreshOrders = async (status, customerName) => {
    try {
      setLoading(true);
      const ordersData = await FetchOrders(status, customerName);
      // Sort orders by the most recent date
      ordersData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setOrders(ordersData);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshOrders();
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
      <View style={[t.pX4, t.pT4]}>
        <Text style={[t.textCenter, t.text2xl, t.fontBold, t.mB4, t.textPink700]}>Order List</Text>
        <SearchOrder onSearch={refreshOrders} />
      </View>
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
