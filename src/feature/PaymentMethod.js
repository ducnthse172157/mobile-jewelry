// src/components/Payment.js
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchPayment } from '../service/Order';

const Payment = () => {
  const [paymentOptions, setPaymentOptions] = useState([]);
  const [selectedPayments, setSelectedPayments] = useState({});

  useEffect(() => {
    const fetchPaymentOptions = async () => {
      try {
        const payments = await FetchPayment();
        setPaymentOptions(payments);
        // Initialize selectedPayments state with false for each payment option
        const initialSelections = {};
        payments.forEach(payment => {
          initialSelections[payment._id] = false;
        });
        setSelectedPayments(initialSelections);
      } catch (error) {
        console.error('Error fetching payment options:', error);
      }
    };
    fetchPaymentOptions();
  }, []);

  const toggleCheckbox = (id) => {
    setSelectedPayments(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <View style={[t.p4]}>
      {paymentOptions.map(payment => (
        <Pressable
          key={payment._id}
          onPress={() => toggleCheckbox(payment._id)}
          style={[t.flexRow, t.itemsCenter, t.mB2]}
        >
          <View style={[t.w6, t.h6, t.border2, t.borderPink600, t.flex, t.itemsCenter, t.justifyCenter]}>
            {selectedPayments[payment._id] && <View style={[t.w3, t.h3, t.bgPink600]} />}
          </View>
          <Text style={[t.mL2, t.textPink800]}>{payment.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Payment;
