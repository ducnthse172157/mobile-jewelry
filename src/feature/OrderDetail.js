import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchOrderById } from '../service/Order';
import LoadingAnimation from '../component/Loading';

const OrderDetail = ({ route }) => {
  const { orderId } = route.params;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await FetchOrderById(orderId);
        setOrder(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <Text style={[t.textCenter, t.textRed500]}>Error: {error.message}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={[t.m4]}>
      {order && (
        <View style={[t.p4, t.borderB, t.borderGray300]}>
          <Text style={[t.textLg, t.fontBold, t.textPink700]}>Order ID: {order._id}</Text>
          <Text>Total Price: {order.totalPrice}</Text>
          <Text>Quantity: {order.quantity}</Text>
          <Text>Description: {order.description}</Text>
          <Text>Status: {order.status}</Text>
          <Text>Cash Paid: {order.cashPaid}</Text>
          <Text>Bank Paid: {order.bankPaid}</Text>
          <Text>Remaining Amount: {order.remainingAmount}</Text>
          <Text>Excess Amount: {order.excessAmount}</Text>
          <Text>Date: {new Date(order.date).toLocaleDateString()}</Text>
          <Text style={[t.textXl, t.fontBold, t.mT4, t.textPink700]}>Order Details:</Text>
          {order.orderDetails.map(detail => (
            <View key={detail._id} style={[t.mT4, t.p4, t.border, t.borderGray300]}>
              <Text style={[t.textLg, t.fontBold, t.textPink700]}>Product Name: {detail.productID.name}</Text>
              <Text>Size: {detail.productID.size}</Text>
              <Text>Weight: {detail.productID.weight}</Text>
              <Text>Description: {detail.productID.description}</Text>
              <Text>Price: {detail.productID.price}</Text>
              <Text>Color: {detail.productID.color}</Text>
              <Text>Quantity: {detail.quantity}</Text>
            </View>
          ))}
          <Text style={[t.textXl, t.fontBold, t.mT4, t.textPink700]}>Customer Info:</Text>
          <Text>Name: {order.customerID.name}</Text>
          <Text>Age: {order.customerID.age}</Text>
          <Text>Phone: {order.customerID.phone}</Text>
          <Text>Address: {order.customerID.address}</Text>
          <Text style={[t.textXl, t.fontBold, t.mT4, t.textPink700]}>Payments:</Text>
          {order.payments.map(payment => (
            <Text key={payment._id}>{payment.name}</Text>
          ))}
          <Text style={[t.textXl, t.fontBold, t.mT4, t.textPink700]}>Store Info:</Text>
          <Text>Store Name: {order.storeID.name}</Text>
          <Text>Phone: {order.storeID.phone}</Text>
          <Text>Location: {order.storeID.location}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default OrderDetail;
