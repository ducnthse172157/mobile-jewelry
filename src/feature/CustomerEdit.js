// src/feature/CustomerEdit.js
import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";

const CustomerEdit = ({ customer, onSave }) => {
  const [editedCustomer, setEditedCustomer] = useState({ ...customer });

  const handleChange = (name, value) => {
    setEditedCustomer({ ...editedCustomer, [name]: value });
  };

  return (
    <View style={[t.p4, t.borderB, t.borderPink600]}>
      <Text style={[t.textPink800, t.textLg, t.mB2]}>Edit Customer Information</Text>
      <TextInput
        style={[t.border, t.borderPink600, t.p2, t.mB2]}
        placeholder="Name"
        value={editedCustomer.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={[t.border, t.borderPink600, t.p2, t.mB2]}
        placeholder="Age"
        value={editedCustomer.age}
        onChangeText={(text) => handleChange("age", text)}
      />
      <TextInput
        style={[t.border, t.borderPink600, t.p2, t.mB2]}
        placeholder="Phone"
        value={editedCustomer.phone}
        onChangeText={(text) => handleChange("phone", text)}
      />
      <TextInput
        style={[t.border, t.borderPink600, t.p2, t.mB2]}
        placeholder="Address"
        value={editedCustomer.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <View style={[t.flexRow, t.justifyAround]}>
        <Pressable style={[t.bgPink600, t.p2, t.roundedLg]} onPress={() => onSave(editedCustomer)}>
          <Text style={[t.textWhite]}>Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomerEdit;
