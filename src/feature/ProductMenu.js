import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import Card from "../component/Card";
import Icon from "react-native-vector-icons/FontAwesome";
import Pagination from "../component/Pagination";

const ProductMenu = ({
  products,
  addToOrder,
  navigation,
  increaseQuantity,
  decreaseQuantity,
  order,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);

  const getOrderQuantity = (productId) => {
    const product = order.find((item) => item._id === productId);
    return product ? product.quantity : 0;
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <View>
      <Text style={[t.text2xl, t.textCenter, t.fontBold, t.textPink700, t.mB4]}>
        Product Menu
      </Text>
      <View style={[t.flex, t.flexWrap, t.flexRow, t.justifyBetween]}>
        {paginatedProducts.map((product) => (
          <Pressable
            key={product._id}
            style={[t.w1_2, t.p1]}
            onPress={() => navigation.navigate("Info", { product })}
          >
            <Card style={[t.bgWhite, t.roundedLg, t.shadowLg]}>
              <View style={[t.relative]}>
                <Image
                  source={{ uri: product.images[0] }}
                  style={[t.wFull, t.h40, t.roundedTLg]}
                />
                <View style={[t.p1]}>
                  <Text style={[t.textGray900]}>{product._id}</Text>
                  <Text style={[t.textGray900]}>{product.name}</Text>
                  <Text style={[t.textBase, t.fontBold, t.textGray700, t.mT1]}>
                    {product.price} vnd
                  </Text>
                </View>
                {getOrderQuantity(product._id) === 0 ? (
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
                      style={[t.bgPink700, t.pX2, t.pY1, t.roundedFull]}
                      onPress={() => decreaseQuantity(product._id)}
                    >
                      <Icon name="minus" size={12} color="white" />
                    </Pressable>
                    <Text style={[t.mX2, t.textLg, t.fontBold, t.textGray900]}>
                      {getOrderQuantity(product._id)}
                    </Text>
                    <Pressable
                      style={[t.bgPink700, t.pX2, t.pY1, t.roundedFull]}
                      onPress={() => increaseQuantity(product._id)}
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </View>
  );
};

export default ProductMenu;
