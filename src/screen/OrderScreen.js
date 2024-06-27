// src/screen/OrderScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';
import OrderList from '../feature/OrderList';
import { useOrders } from '../context/OrderContext';
import DeleteConfirmation from '../component/DeleteConfirmation';

const OrderScreen = () => {
  const { orders, refreshOrders, deleteOrder } = useOrders();
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);

  useEffect(() => {
    refreshOrders();
  }, []);

  const handleDelete = async (orderId) => {
    await deleteOrder(orderId);
    setDeletePopupVisible(false);
  };

  const openDeleteConfirmation = (orderId) => {
    setSelectedOrderId(orderId);
    setDeletePopupVisible(true);
  };

  return (
    <View style={[t.m4]}>
      <Text style={[t.textCenter, t.text2xl, t.fontBold, t.mB4, t.textPink700]}>Order List</Text>
      <OrderList
        orders={orders}
        openDeleteConfirmation={openDeleteConfirmation}
      />
      {isDeletePopupVisible && (
        <DeleteConfirmation
          isVisible={isDeletePopupVisible}
          onClose={() => setDeletePopupVisible(false)}
          onConfirm={() => handleDelete(selectedOrderId)}
          orderId={selectedOrderId}
        />
      )}
    </View>
  );
};

export default OrderScreen;
