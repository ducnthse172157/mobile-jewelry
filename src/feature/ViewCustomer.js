// src/feature/ViewCustomer.js
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import { MaterialIcons } from "@expo/vector-icons";
import Popup from "../component/Popup";

const ViewCustomer = ({ customer, onEdit, onDelete }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <View style={[t.p4, t.borderB, t.borderPink600]}>
      <View style={[t.flexRow, t.justifyBetween, t.itemsCenter]}>
        <Text style={[t.textPink800, t.textLg]}>Customer Information</Text>
        <View style={[t.flexRow]}>
          <Pressable onPress={onEdit}>
            <MaterialIcons name="edit" size={24} color="black" />
          </Pressable>
          <Pressable onPress={() => setShowDeletePopup(true)} style={[t.mL4]}>
            <MaterialIcons name="delete" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <Text style={[t.mT2]}>{`Name: ${customer.name}`}</Text>
      <Text style={[t.mT2]}>{`Age: ${customer.age}`}</Text>
      <Text style={[t.mT2]}>{`Phone: ${customer.phone}`}</Text>
      <Text style={[t.mT2]}>{`Address: ${customer.address}`}</Text>
      <Popup
        isVisible={showDeletePopup}
        onClose={() => setShowDeletePopup(false)}
        title="Confirm Deletion"
      >
        <Text>Are you sure you want to delete this customer?</Text>
        <View style={[t.flexRow, t.justifyAround, t.mT4]}>
          <Pressable
            style={[t.bgPink600, t.p2, t.roundedLg]}
            onPress={() => {
              onDelete();
              setShowDeletePopup(false);
            }}
          >
            <Text style={[t.textWhite]}>Yes</Text>
          </Pressable>
          <Pressable
            style={[t.bgGray600, t.p2, t.roundedLg]}
            onPress={() => setShowDeletePopup(false)}
          >
            <Text style={[t.textWhite]}>No</Text>
          </Pressable>
        </View>
      </Popup>
    </View>
  );
};

export default ViewCustomer;
