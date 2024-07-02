// src/screens/CheckoutScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";
import Checkout from "../feature/Checkout";
import AddCustomer from "../feature/AddCustomer";
import ViewCustomer from "../feature/ViewCustomer";
import CustomerEdit from "../feature/CustomerEdit";
import PaymentMethod from "../feature/PaymentMethod";
import LoadingAnimation from "../component/Loading";
import { useToast } from "../component/Toast";

const CheckoutScreen = ({ route }) => {
  const { order } = route.params;
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("checkout");
  const [customer, setCustomer] = useState(null);
  const toast = useToast();

  const handleCompleteCheckout = async () => {
    setLoading(true);
    try {
      // Simulate API call for checkout process
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      toast.current.show("Checkout completed successfully!");
      setCurrentScreen("home");
    } catch (error) {
      setLoading(false);
      toast.current.show("Checkout failed. Please try again.");
    }
  };

  const renderCustomerContent = () => {
    switch (currentScreen) {
      case "addCustomer":
        return (
          <AddCustomer
            onAddCustomer={(newCustomer) => {
              setCustomer(newCustomer);
              setCurrentScreen("viewCustomer");
            }}
            onNext={() => setCurrentScreen("viewCustomer")}
          />
        );
      case "viewCustomer":
        return (
          <ViewCustomer
            customer={customer}
            onEdit={() => setCurrentScreen("editCustomer")}
            onDelete={() => {
              setCustomer(null);
              setCurrentScreen("addCustomer");
            }}
          />
        );
      case "editCustomer":
        return (
          <CustomerEdit
            customer={customer}
            onSave={(updatedCustomer) => {
              setCustomer(updatedCustomer);
              setCurrentScreen("viewCustomer");
            }}
          />
        );
      default:
        return (
          <Pressable onPress={() => setCurrentScreen("addCustomer")}>
            <Text style={[t.textPink800, t.textLg]}>Add Customer Info</Text>
          </Pressable>
        );
    }
  };

  return (
    <View style={[t.flex1, t.bgWhite, t.p4]}>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <ScrollView>
          <Checkout order={order} />
          {renderCustomerContent()}
          <PaymentMethod />
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mT4]}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <Pressable
            style={[t.bgPink600, t.p4, t.itemsCenter, t.mT4, t.roundedLg]}
            onPress={handleCompleteCheckout}
          >
            <Text style={[t.textWhite, t.textLg]}>Complete Checkout</Text>
          </Pressable>
        </ScrollView>
      )}
    </View>
  );
};

export default CheckoutScreen;
