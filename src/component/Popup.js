import React from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import { MaterialIcons } from "@expo/vector-icons";

const Popup = ({ isVisible, onClose, title, children }) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={[t.flex1, t.justifyCenter, t.itemsCenter, styles.overlay]}>
        <View style={[t.bgWhite, t.roundedLg, t.p5, t.itemsCenter, t.w4_5]}>
          <Pressable
            onPress={onClose}
            style={[t.absolute, t.top0, t.right0, t.mT2, t.mR2]}
          >
            <MaterialIcons name="close" size={24} color="black" />
          </Pressable>
          <Text style={[t.textXl, t.fontBold, t.mB4]}>{title}</Text>
          <View style={[t.mB5]}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default Popup;
