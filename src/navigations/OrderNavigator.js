import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InfoScreen from "../screen/InfoScreen";
import OrderScreen from "../screen/OrderScreen";
import CustomerOrder from "../feature/CustomerOrder";
import OrderDetail from "../feature/OrderDetail";

const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderMenu"
        component={OrderScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
        }}
      />
      <Stack.Screen name="Customer Detail" component={CustomerOrder} />
      <Stack.Screen name="Order Detail" component={OrderDetail}/>

    </Stack.Navigator>
  );
};

export default OrderNavigator;
