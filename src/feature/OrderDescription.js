import React from 'react';
import { View, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';

const OrderDescription = ({ values, handleChange, handleBlur }) => {
  return (
    <View>
      <TextInput
        style={[
          t.borderB,
          t.borderGray400,
          t.rounded,
          t.p2,
          t.textPink700,
          t.mY2,
          t.wFull,
        ]}
        placeholder="Enter order description"
        value={values.orderDescription}
        onChangeText={handleChange('orderDescription')}
        onBlur={handleBlur('orderDescription')}
      />
    </View>
  );
};

export default OrderDescription;
