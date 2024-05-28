import React, { useState } from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import { EditOutlined } from "@ant-design/icons";
import { t } from "react-native-tailwindcss";

const JewelryInfo = ({ jewelryData, editable, onUpdate }) => {
  return (
    <View style={[t.itemsStart, t.m5, t.justifyCenter, t.itemsCenter]}>
      <Image
        source={jewelryData.image}
        style={[t.w40, t.h40, t.border, t.borderPink300, t.mB2]}
        resizeMode="contain"
      />
      <View style={[t.flex1]}>
        {editable ? (
          <View>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Description:</Text>
              <TextInput
                style={[t.textBase, t.textPink700, t.mB3, t.border, t.borderPink300, t.p1]}
                value={jewelryData.description}
                onChangeText={(text) => onUpdate({ ...jewelryData, description: text })}
                placeholder="Enter description"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Price:</Text>
              <TextInput
                style={[t.textBase, t.textPink700, t.mB3, t.border, t.borderPink300, t.p1]}
                value={jewelryData.price}
                onChangeText={(text) => onUpdate({ ...jewelryData, price: text })}
                placeholder="Enter price"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Main Metal Weight:</Text>
              <TextInput
                style={[t.textBase, t.textPink700, t.mB3, t.border, t.borderPink300, t.p1]}
                value={jewelryData.mainMetalWeight}
                onChangeText={(text) => onUpdate({ ...jewelryData, mainMetalWeight: text })}
                placeholder="Enter main metal weight"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Main Gemstone:</Text>
              <TextInput
                style={[t.textBase, t.textPink700, t.mB3, t.border, t.borderPink300, t.p1]}
                value={jewelryData.mainGemstone}
                onChangeText={(text) => onUpdate({ ...jewelryData, mainGemstone: text })}
                placeholder="Enter main Gemstone"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Side Gemstones:</Text>
              <TextInput
                style={[t.textBase, t.textPink700, t.mB3, t.border, t.borderPink300, t.p1]}
                value={jewelryData.sideGemstones}
                onChangeText={(text) => onUpdate({ ...jewelryData, sideGemstones: text })}
                placeholder="Enter side Gemstones"
              />
            </Text>
            
          </View>
        ) : (
          <View>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Description:</Text> {jewelryData.description}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Price:</Text> {jewelryData.price}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Main Metal Weight:</Text> {jewelryData.mainMetalWeight}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Main Gemstones:</Text> {jewelryData.mainGemstone}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Side Gemstones:</Text> {jewelryData.sideGemstones}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default JewelryInfo;
