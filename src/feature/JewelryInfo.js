import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { t } from "react-native-tailwindcss";
import Images from "../../assets/jewelry-logo2.png";

const JewelryInfo = ({ jewelryData, editable, onUpdate }) => {
  return (
    <View style={[t.itemsStart, t.m5, t.justifyCenter, t.itemsCenter]}>
      <Image
        source={Images}
        style={[t.w40, t.h40, t.border, t.borderPink300, t.mB2]}
        resizeMode="contain"
      />
      <View style={[t.flex1]}>
        {editable ? (
          <View>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Name:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.name}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, name: text })
                }
                placeholder="Enter name"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Description:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.description}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, description: text })
                }
                placeholder="Enter description"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Price:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.price}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, price: text })
                }
                placeholder="Enter price"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Gemstone:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.gemstone}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, gemstone: text })
                }
                placeholder="Enter gemstone"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Material:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.material}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, material: text })
                }
                placeholder="Enter material"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Weight:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.weight}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, weight: text })
                }
                placeholder="Enter weight"
              />
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Size:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.size}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, size: text })
                }
                placeholder="Enter size"
              />
            </Text>
            <View style={[t.flexRow, t.itemsCenter, t.mB3]}>
              <Text style={[t.fontBold]}>Color:</Text>
              <TextInput
                style={[
                  t.textBase,
                  t.textPink700,
                  t.mB3,
                  t.border,
                  t.borderPink300,
                  t.p1,
                ]}
                value={jewelryData.color}
                onChangeText={(text) =>
                  onUpdate({ ...jewelryData, color: text })
                }
                placeholder="Enter color"
              />
            </View>
          </View>
        ) : (
          <View>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Name:</Text> {jewelryData.name}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Description:</Text>{" "}
              {jewelryData.description}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Price:</Text> {jewelryData.price}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Gemstone:</Text> {jewelryData.gemstone}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Material:</Text> {jewelryData.material}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Weight:</Text> {jewelryData.weight}
            </Text>
            <Text style={[t.textBase, t.textPink700, t.mB3]}>
              <Text style={[t.fontBold]}>Size:</Text> {jewelryData.size}
            </Text>
            <View style={[t.flexRow, t.itemsCenter, t.mB3]}>
              <Text style={[t.fontBold, t.textPink700]}>Color:</Text>
              <View
                style={[
                  t.w6,
                  t.h6,
                  t.roundedFull,
                  { backgroundColor: jewelryData.color },
                  t.mL2,
                ]}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default JewelryInfo;
