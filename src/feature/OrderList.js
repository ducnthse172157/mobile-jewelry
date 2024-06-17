// src/feature/OrderList.js
import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { MaterialIcons } from "@expo/vector-icons";
import Column from '../component/Column';

const OrderList = ({ orders, openDeleteConfirmation }) => {
  const renderOrderItem = ({ item }) => (
    <View style={[t.flex, t.flexRow, t.justifyBetween, t.pY2, t.borderB, t.borderGray300]}>
      <View style={[t.flex1]}>
        <Text style={[t.textCenter, t.fontBold]}>{item.orderId}</Text>
      </View>
      <View style={[t.flex1]}>
        <Text style={[t.textCenter]}>{item.customerName}</Text>
      </View>
      <View style={[t.flex1]}>
        <Text style={[t.textCenter]}>{item.totalAmount}</Text>
      </View>
      <View style={[t.flex1]}>
        <Pressable onPress={() => openDeleteConfirmation(item.orderId)}>
          <MaterialIcons name="delete" size={24} style={[t.textCenter]} color="red" />
        </Pressable>
      </View>
    </View>
  );

  return (
    <View>
      <Column titles={['Order ID', 'Customer Name', 'Total Amount', 'Actions']} />
      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderId.toString()}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

export default OrderList;
