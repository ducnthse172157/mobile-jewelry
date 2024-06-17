import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import Card from "../component/Card";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductMenu = ({ products, addToOrder, navigation, increaseQuantity, decreaseQuantity, order }) => {
  const getOrderQuantity = (productId) => {
    const product = order.find(item => item.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <View>
      <Text style={[t.text2xl, t.textCenter, t.fontBold, t.textPink700, t.mB4]}>
        Product Menu
      </Text>
      <View style={[t.flex, t.flexWrap, t.flexRow, t.justifyBetween]}>
        {products.map((product) => (
          <Pressable
            key={product.id}
            style={[t.w1_2, t.p1]}
            onPress={() => navigation.navigate("Info", { product })}
          >
            <Card style={[t.bgWhite, t.roundedLg, t.shadowLg]}>
              <View style={[t.relative]}>
                <Image
                  source={product.image}
                  style={[t.wFull, t.h40, t.roundedTLg]}
                />
                <View>
                  <Text style={[t.textBase, t.textGray900]}>
                    {product.name}
                  </Text>
                  <Text style={[t.textBase, t.fontBold, t.textGray700, t.mT1]}>
                    ${product.price}
                  </Text>
                </View>
                {getOrderQuantity(product.id) === 0 ? (
                  <Pressable
                    style={[
                      t.w8,
                      t.h8,
                      t.absolute,
                      t.top0,
                      t.right0,
                      t.m2,
                      t.bgPink700,
                      t.roundedFull,
                      t.itemsCenter,
                      t.justifyCenter,
                    ]}
                    onPress={() => addToOrder(product)}
                  >
                    <Icon name="plus" size={12} color="white" />
                  </Pressable>
                ) : (
                  <View
                    style={[
                      t.absolute,
                      t.top0,
                      t.right0,
                      t.m2,
                      t.flexRow,
                      t.itemsCenter,
                      t.roundedFull,
                      t.borderPink700,
                      t.border,
                      t.p1,
                      t.bgWhite,
                    ]}
                  >
                    <Pressable
                      style={[
                        t.bgPink700,
                        t.pX2,
                        t.pY1,
                        t.roundedFull,
                      ]}
                      onPress={() => decreaseQuantity(product.id)}
                    >
                      <Icon name="minus" size={12} color="white" />
                    </Pressable>
                    <Text style={[t.mX2, t.textLg, t.fontBold, t.textGray900]}>
                      {getOrderQuantity(product.id)}
                    </Text>
                    <Pressable
                      style={[
                        t.bgPink700,
                        t.pX2,
                        t.pY1,
                        t.roundedFull,
                      ]}
                      onPress={() => increaseQuantity(product.id)}
                    >
                      <Icon name="plus" size={12} color="white" />
                    </Pressable>
                  </View>
                )}
              </View>
            </Card>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ProductMenu;
