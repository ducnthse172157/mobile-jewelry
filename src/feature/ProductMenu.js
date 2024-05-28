import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";
import Card from "../component/Card";

const ProductMenu = ({ products, addToOrder, navigation }) => {
  return (
    <View style={[t.p4, t.pB20]}>
        <Text style={[t.textXl, t.textCenter, t.fontBold, t.textPink700]}>
          Product Menu
        </Text>
        <View style={[t.flex, t.flexWrap, t.flexRow, t.justifyBetween]}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={[t.w1_2, t.p1]}
              onPress={() => navigation.navigate("InfoScreen", { product })}
            >
              <Card style={[t.h100,t.bgWhite, t.roundedLg, t.shadowLg]}>
                <View style={[t.relative]}>
                  <Image
                    src={{ uri: product.image }}
                    style={[t.wFull, t.h40]}
                  />
                  <TouchableOpacity
                    style={[
                      t.w5,
                      t.h5,
                      t.absolute,
                      t.top0,
                      t.right0,
                      t.m2,
                      t.bgPink700,
                      t.roundedFull,
                      t.p2,
                    ]}
                    onPress={() => addToOrder(product)}
                  >
                    <Text style={[t.textWhite, t.textLg]}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={[t.p4]}>
                  <Text>{product.id}</Text>
                  <Text>{product.name}</Text>
                  <Text>{product.price}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );
};

export default ProductMenu;
