// Column.js
import React from 'react';
import { View, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';

const Column = ({ titles }) => {
  return (
    <View style={[t.flex, t.flexRow, t.justifyBetween, t.pY2, t.borderB, t.borderGray300, t.bgPink700]}>
      {titles.map((title, index) => (
        <View key={index} style={[t.flex1]}>
          <Text style={[t.textCenter, t.fontBold, t.textWhite]}>
            {title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Column;

