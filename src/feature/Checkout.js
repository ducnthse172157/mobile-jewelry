import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";
import { updateOrders } from "../service/Order";
import { useOrders } from '../context/OrderContext';
import { Formik } from 'formik';
import { validationSchema } from "../constants/schema";
import LoadingAnimation from "../component/Loading";

const Checkout = ({ order, navigation }) => {
  const [orderId, setOrderId] = useState("");
  const { refreshOrders } = useOrders();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateOrderId = () => Math.random().toString(36).substr(2, 9);
    setOrderId(generateOrderId());
  }, []);

  const totalAmount = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const resetStateAndNavigateHome = async (values) => {
    setLoading(true);
    const newOrder = {
      orderId,
      customerName: values.customerName,
      items: order,
      totalAmount,
      moneyReceived: parseInt(values.moneyReceived),
      returnAmount: (parseInt(values.moneyReceived) - totalAmount).toFixed(0)
    };

    try {
      await updateOrders(newOrder);
      await refreshOrders(); // Refresh the orders after adding a new order
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error processing order:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Formik
      initialValues={{ customerName: '', moneyReceived: '' }}
      validationSchema={validationSchema(totalAmount)}
      onSubmit={(values) => resetStateAndNavigateHome(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                    {item.price}&#x20AB; x {item.quantity}
                  </Text>
                  <Text style={[t.textBase, t.mLAuto]}>
                    {(item.price * item.quantity).toFixed(0)}&#x20AB;
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
            value={values.customerName}
            onChangeText={handleChange('customerName')}
            onBlur={handleBlur('customerName')}
          />
          {touched.customerName && errors.customerName && (
            <Text style={[t.textRed500]}>{errors.customerName}</Text>
          )}
          <View style={[t.wFull, t.borderT, t.borderGray300, t.mY2]} />
          <View style={[t.mLAuto]}>
            <Text style={[t.textLg, t.fontBold]}>
              Total: {totalAmount.toFixed(0)}&#x20AB;
            </Text>
            <TextInput
              style={[
                t.borderB,
                t.borderGray400,
                t.rounded,
                t.p2,
                t.textPink700,
                t.mY2,
                t.w1_2,
                t.textRight,
              ]}
              placeholder="Enter money received"
              keyboardType="numeric"
              value={values.moneyReceived}
              onChangeText={handleChange('moneyReceived')}
              onBlur={handleBlur('moneyReceived')}
            />
          </View>
          {touched.moneyReceived && errors.moneyReceived && (
            <Text style={[t.textRed500, t.textRight]}>{errors.moneyReceived}</Text>
          )}
          <Text style={[t.textLg, t.fontBold, t.textPink700, t.mB4, t.textRight]}>
            Return Amount: {isNaN(parseInt(values.moneyReceived) - totalAmount) ? "0" : (parseInt(values.moneyReceived) - totalAmount).toFixed(0)}&#x20AB;
          </Text>
          <Pressable
            style={[t.bgPink700, t.roundedFull, t.p4, t.itemsCenter]}
            onPress={handleSubmit}
          >
            <Text style={[t.textWhite, t.fontBold]}>Complete Transaction</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default Checkout;