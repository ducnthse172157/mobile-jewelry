import React from "react";
import { View, Text, Pressable } from "react-native";
import Popup from "./Popup";
import { t } from "react-native-tailwindcss";

const DeleteConfirmation = ({ isVisible, onClose, onConfirm, orderId }) => {
  return (
    <Popup isVisible={isVisible} onClose={onClose} title="Confirm Deletion">
      <Text>Delete order <Text style={[t.fontBold]}>{orderId}?</Text></Text>
      <View style={[t.flexRow, t.mT5, t.mXAuto]}>
        <Pressable onPress={onConfirm} style={[t.bgRed500, t.pX4, t.pY2, t.rounded, t.mR2]}>
          <Text style={[t.textWhite, t.textLg]}>Yes</Text>
        </Pressable>
        <Pressable onPress={onClose} style={[t.bgTeal400, t.pX4, t.pY2, t.rounded]}>
          <Text style={[t.textWhite, t.textLg]}>No</Text>
        </Pressable>
      </View>
    </Popup>
  );
};

export default DeleteConfirmation;
