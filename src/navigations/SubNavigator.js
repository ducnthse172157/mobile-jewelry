import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screen/SearchScreen";
import InfoScreen from "../screen/InfoScreen";
import CheckoutScreen from "../screen/CheckoutScreen";

const Stack = createStackNavigator();

const SubNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductMenu"
        component={SearchScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
        }}
      />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default SubNavigator;
