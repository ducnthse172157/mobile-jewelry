// src/context/OrderContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchOrders } from '../service/Product';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const refreshOrders = async () => {
    const fetchedOrders = await fetchOrders();
    setOrders(fetchedOrders);
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, setOrders, refreshOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
