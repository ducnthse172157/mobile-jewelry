import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import { t } from "react-native-tailwindcss";
import DetailAnimation from "../component/DetailAnimation";
import { sizes } from "../constants/theme";

const JewelryInfo = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <View style={[t.itemsStart, t.m5, t.justifyCenter, t.itemsCenter]}>
      <View style={[t.flexRow, t.itemsCenter]}>
        <Pressable onPress={handlePreviousImage}>
          <Text style={[t.text4xl, t.fontBold, t.textPink700, t.mR3]}>&lt;</Text>
        </Pressable>
        <Image
          source={{ uri: product.images[currentImageIndex] }}
          style={[styles.Image, t.roundedTLg, t.mB2, t.shadow2xl]}
        />
        <Pressable onPress={handleNextImage}>
          <Text style={[t.text4xl, t.fontBold, t.textPink700, t.mL3]}>&gt;</Text>
        </Pressable>
      </View>
      <View style={[t.flexRow, t.mT3, t.top0, t.left0]}>
        {product.images.map((image, index) => (
          <View key={index} style={[t.p1]}>
            <Image
              source={{ uri: image }}
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
        <View>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>{product.name}</Text> 
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text>{product.price}</Text> vnd
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Type:</Text> {product.type}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Description:</Text> {product.description}
          </Text>
          
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Gemstones:</Text> {product.gemstone}
          </Text>
          <Text style={[t.textBase, t.textPink700, t.mB3]}>
            <Text style={[t.fontBold]}>Materials:</Text> {product.material}
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
