import React from "react";
import { View, Text, Image } from "react-native";
import { t } from "react-native-tailwindcss";


const JewelryInfo = ({ product }) => {
  return (
    <View style={[t.itemsStart, t.m5, t.justifyCenter, t.itemsCenter]}>
      <Image
        source={product.image}
        style={[t.wFull, t.roundedTLg, t.w40, t.h40, t.border, t.borderPink300, t.mB2]}
      />
      <View style={[t.flex1]}>
        <View>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Name:</Text> {product.name}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Type:</Text> {product.type}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Description:</Text> {product.description}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Price:</Text> ${product.price}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Gemstones:</Text> {product.gemstones.join(", ")}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Materials:</Text> {product.materials.join(", ")}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Weight:</Text> {product.weight}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Size:</Text> {product.size}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Color:</Text> {product.color}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default JewelryInfo;
