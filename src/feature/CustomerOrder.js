import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchCustomerById } from '../service/Order';
import LoadingAnimation from '../component/Loading';

const CustomerOrder = ({ route }) => {
  const { customerId } = route.params;
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await FetchCustomerById(customerId);
        setCustomer(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [customerId]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <Text style={[t.textCenter, t.textRed500]}>Error: {error.message}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={[t.m4]}>
      {customer && (
        <View style={[t.p4, t.borderB, t.borderGray300]}>
          <Text style={[t.textLg, t.textPink700]}>Name: {customer.name}</Text>
          <Text>Age: {customer.age}</Text>
          <Text>Phone: {customer.phone}</Text>
          <Text>Address: {customer.address}</Text>
          <Text style={[t.textXl, t.fontBold, t.mT4, t.textPink700]}>Orders:</Text>
          {customer.orders.length > 0 ? (
            customer.orders.map((order) => (
              <View key={order._id} style={[t.mT4, t.p4, t.border, t.borderGray300]}>
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
                <Text>Order Details: {order.orderDetails.join(', ')}</Text>
                <Text>Payments: {order.payments.join(', ')}</Text>
                <Text>Store ID: {order.storeID}</Text>
              </View>
            ))
          ) : (
            <Text>No order information</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default CustomerOrder;
