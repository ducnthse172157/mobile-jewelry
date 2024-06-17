// src/context/OrderContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchOrders, deleteOrder as deleteOrderService } from '../service/Order';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const refreshOrders = async () => {
    const fetchedOrders = await fetchOrders();
    setOrders(fetchedOrders);
  };

  const deleteOrder = async (orderId) => {
    await deleteOrderService(orderId);
    setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, setOrders, refreshOrders, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);

