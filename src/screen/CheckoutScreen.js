import React from "react";
import { View } from "react-native";
import { t } from "react-native-tailwindcss";
import Checkout from "../feature/Checkout";


const CheckoutScreen = ({ route, navigation }) => {
  const { order } = route.params;

  return (
    <View style={[t.flex1, t.bgWhite]}>
      <Checkout order={order} navigation={navigation} />
    </View>
  );
};

export default CheckoutScreen;
