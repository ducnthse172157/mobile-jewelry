import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { t } from "react-native-tailwindcss";
import DetailAnimation from "../component/DetailAnimation";

const JewelryInfo = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.imageIDs.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.imageIDs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <View style={[t.itemsStart, t.m5, t.justifyCenter, t.itemsCenter]}>
      <View style={[t.flexRow, t.itemsCenter]}>
        <Pressable onPress={handlePreviousImage}>
          <Text style={[t.text4xl, t.fontBold, t.textPink700, t.mR3]}>&lt;</Text>
        </Pressable>
        <Image
          source={{ uri: product.imageIDs[currentImageIndex].imageLink }}
          style={[styles.Image, t.roundedTLg, t.mB2, t.shadow2xl]}
        />
        <Pressable onPress={handleNextImage}>
          <Text style={[t.text4xl, t.fontBold, t.textPink700, t.mL3]}>&gt;</Text>
        </Pressable>
      </View>
      <View style={[t.flexRow, t.mT3, t.top0, t.left0]}>
        {product.imageIDs.map((image, index) => (
          <View key={index} style={[t.p1]}>
            <Image
              source={{ uri: image.imageLink }}
              style={[
                t.w20,
                t.h20,
                t.roundedLg,
                t.shadowLg,
                { opacity: index === currentImageIndex ? 1 : 0.5 },
                index === currentImageIndex && {
                  shadowColor: "#000",
                  shadowRadius: 10,
                },
              ]}
            />
          </View>
        ))}
      </View>
      <DetailAnimation>
        <View style={[t.bgPink100, t.p4, t.roundedBeFull]}>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.textXl, t.fontBold]}>{product.name}</Text>
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Price:</Text> {product.price}&#x20AB;
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Type:</Text> {product.productTypeID.name}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Description:</Text> {product.description}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Gemstones:</Text> {product.gemstoneID.name}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Materials:</Text> {product.materialID.name}
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
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Available:</Text> {product.quantity}
          </Text>
        </View>
      </DetailAnimation>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
  },
});

export default JewelryInfo;
