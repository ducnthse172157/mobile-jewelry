// src/feature/AddCustomer.js
import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";

const AddCustomer = ({ onAddCustomer, onNext }) => {
  const [customer, setCustomer] = useState({
    name: "",
    age: "",
    phone: "",
    address: ""
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (name, value) => {
    setCustomer({ ...customer, [name]: value });
  };

  const handleSave = () => {
    onAddCustomer(customer);
    setShowForm(false);
    onNext();
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <View style={[t.p4, t.borderB, t.borderPink600]}>
      {showForm ? (
        <>
          <Text style={[t.textPink800, t.textLg, t.mB2]}>Customer Information</Text>
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Name"
            value={customer.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Age"
            value={customer.age}
            onChangeText={(text) => handleChange("age", text)}
          />
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Phone"
            value={customer.phone}
            onChangeText={(text) => handleChange("phone", text)}
          />
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Address"
            value={customer.address}
            onChangeText={(text) => handleChange("address", text)}
          />
          <View style={[t.flexRow, t.justifyBetween]}>
            <Pressable style={[t.bgPink600, t.p2, t.roundedLg]} onPress={handleSave}>
              <Text style={[t.textWhite]}>Save Changes</Text>
            </Pressable>
            <Pressable style={[t.bgGray600, t.p2, t.roundedLg]} onPress={handleCancel}>
              <Text style={[t.textWhite]}>Cancel</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <Pressable onPress={() => setShowForm(true)}>
          <Text style={[t.textPink800, t.textLg]}>Add Customer Info</Text>
        </Pressable>
      )}
    </View>
  );
};

export default AddCustomer;
