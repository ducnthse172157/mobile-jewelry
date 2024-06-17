
import orders from "../mock/order"; // Your fake API data

export const updateOrders = (newOrder) => {
    // Ensure orders is an array
    if (!Array.isArray(orders)) {
      orders = []; // Initialize if not already an array
    }
    orders.push(newOrder);
    console.log('Updated orders:', orders);
  };
  
  export const fetchOrders = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(orders);
      }, 1000);
    });
  };
  
  // New deleteOrder function
  export const deleteOrder = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = orders.findIndex(order => order.orderId === orderId);
        if (index !== -1) {
          orders.splice(index, 1);
          console.log('Deleted order:', orderId);
          resolve(orders);
        } else {
          reject(new Error('Order not found'));
        }
      }, 1000);
    });
  };
  