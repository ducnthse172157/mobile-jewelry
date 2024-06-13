import React from "react";
import { View, Text, Image } from "react-native";
import { t } from "react-native-tailwindcss";
import Images from "../../assets/jewelry-logo2.png";

const JewelryInfo = ({ jewelryData }) => {
  return (
    <View style={[t.itemsStart, t.m5, t.justifyCenter, t.itemsCenter]}>
      <Image
        source={Images}
        style={[t.w40, t.h40, t.border, t.borderPink300, t.mB2]}
        resizeMode="contain"
      />
      <View style={[t.flex1]}>
        <View>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Name:</Text> {jewelryData.name}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Type:</Text> {jewelryData.type}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Description:</Text> {jewelryData.description}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Price:</Text> ${jewelryData.price}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Gemstones:</Text> {jewelryData.gemstones.join(", ")}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Materials:</Text> {jewelryData.materials.join(", ")}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Weight:</Text> {jewelryData.weight}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Size:</Text> {jewelryData.size}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Color:</Text> {jewelryData.color}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default JewelryInfo;
