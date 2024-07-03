// src/screens/CheckoutScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { t } from "react-native-tailwindcss";
import Checkout from "../feature/Checkout";
import AddCustomer from "../feature/AddCustomer";
import ViewCustomer from "../feature/ViewCustomer";
import CustomerEdit from "../feature/CustomerEdit";
import PaymentMethod from "../feature/PaymentMethod";
import LoadingAnimation from "../component/Loading";
import { useToast } from "../component/Toast";
import { FetchStores } from "../service/Order";

const CheckoutScreen = ({ route }) => {
  const { order } = route.params;
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("checkout");
  const [customer, setCustomer] = useState(null);
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const getStores = async () => {
      try {
        const storesData = await FetchStores();
        setStores(storesData);
        if (storesData.length > 0) {
          setSelectedStore(storesData[0]._id);
        }
      } catch (error) {
        toast.current.show("Failed to fetch stores.");
      }
    };

    getStores();
  }, []);

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
          <AddCustomer
            onAddCustomer={(newCustomer) => {
              setCustomer(newCustomer);
              setCurrentScreen("viewCustomer");
            }}
            onNext={() => setCurrentScreen("viewCustomer")}
            onViewCustomer={(customer) => {
              setCustomer(customer);
              setCurrentScreen("viewCustomer");
            }}
          />
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
          <Picker
            selectedValue={selectedStore}
            style={[t.border, t.borderPink600, t.p2, t.mT4]}
            onValueChange={(itemValue) => setSelectedStore(itemValue)}
          >
            {stores.map((store) => (
              <Picker.Item key={store._id} label={store.name} value={store._id} />
            ))}
          </Picker>
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
