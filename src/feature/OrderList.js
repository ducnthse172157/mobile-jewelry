import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import DeleteConfirmationPopup from '../component/DeleteConfirmation';
import Column from '../component/Column';
import { MaterialIcons } from "@expo/vector-icons";
import { useOrders } from '../context/OrderContext';

const OrderList = () => {
  const { orders,setOrders, refreshOrders } = useOrders();
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);

  useEffect(() => {
    refreshOrders();
  }, []);

  const handleDelete = (orderId) => {
    setOrders(orders.filter(order => order.orderId !== orderId));
    setDeletePopupVisible(false);
  };

  const openDeleteConfirmation = (orderId) => {
    setSelectedOrderId(orderId);
    setDeletePopupVisible(true);
  };

  return (
    <View style={[t.m4]}>
      <Text style={[t.textCenter, t.text2xl, t.fontBold, t.mB4, t.textPink700]}>Order List</Text>
      <Column titles={['Order ID', 'Customer Name', 'Total Amount', 'Actions']} />
      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderId.toString()}
        renderItem={({ item }) => (
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
        )}
      />
      {isDeletePopupVisible && (
        <DeleteConfirmationPopup
          isVisible={isDeletePopupVisible}
          onClose={() => setDeletePopupVisible(false)}
          onConfirm={() => handleDelete(selectedOrderId)}
          orderId={selectedOrderId}
        />
      )}
    </View>
  );
};

export default OrderList;
