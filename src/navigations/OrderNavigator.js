import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../screen/OrderScreen";
import CustomerOrder from "../feature/CustomerOrder";
import OrderDetail from "../feature/OrderDetail";
import CustomerEdit from "../feature/CustomerEdit";

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
      <Stack.Screen name="CustomerEdit" component={CustomerEdit} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
