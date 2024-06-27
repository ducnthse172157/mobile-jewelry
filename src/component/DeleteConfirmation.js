// src/component/DeleteConfirmation.js
import React from "react";
import { View, Text, Pressable } from "react-native";
import Popup from "./Popup";
import { t } from "react-native-tailwindcss";

const DeleteConfirmation = ({ isVisible, onClose, onConfirm, orderId }) => {
  return (
    <Popup isVisible={isVisible} onClose={onClose} title="Delete Order">
      <Text style={[t.textCenter]}>
        Are you sure you want to delete order <Text style={[t.fontBold, t.textPink700]}>{orderId}</Text>?
      </Text>
      <View style={[t.flexRow, t.mT5, t.mXAuto]}>
        <Pressable onPress={onConfirm} style={[t.bgPink700, t.pX4, t.pY2, t.rounded, t.mR2]}>
          <Text style={[t.textWhite, t.textLg]}>Yes</Text>
        </Pressable>
        <Pressable onPress={onClose} style={[t.bgPink300, t.pX4, t.pY2, t.rounded]}>
          <Text style={[t.textWhite, t.textLg]}>No</Text>
        </Pressable>
      </View>
    </Popup>
  );
};

export default DeleteConfirmation;
