import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import { t } from 'react-native-tailwindcss';

const PaymentMethod = ({ values, handleChange }) => {
  return (
    <View>
      <Text style={[t.textLg, t.fontBold, t.mY2]}>Payment Method:</Text>
      <View style={[t.flexRow, t.itemsCenter, t.mY2]}>
        <CheckBox
          value={values.cash}
          onValueChange={handleChange('cash')}
        />
        <Text style={[t.textBase, t.mL2]}>Cash</Text>
      </View>
      <View style={[t.flexRow, t.itemsCenter, t.mY2]}>
        <CheckBox
          value={values.creditCard}
          onValueChange={handleChange('creditCard')}
        />
        <Text style={[t.textBase, t.mL2]}>Credit Card</Text>
      </View>
    </View>
  );
};

export default PaymentMethod;
