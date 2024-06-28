import React from 'react';
import { View, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';

const CustomerInfo = ({ values, handleChange, handleBlur, errors, touched }) => {
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
        placeholder="Enter customer name"
        value={values.customerName}
        onChangeText={handleChange('customerName')}
        onBlur={handleBlur('customerName')}
      />
      {touched.customerName && errors.customerName && (
        <Text style={[t.textRed500]}>{errors.customerName}</Text>
      )}
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
        placeholder="Enter customer age"
        keyboardType="numeric"
        value={values.age}
        onChangeText={handleChange('age')}
        onBlur={handleBlur('age')}
      />
      {touched.age && errors.age && (
        <Text style={[t.textRed500]}>{errors.age}</Text>
      )}
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
        placeholder="Enter customer phone"
        keyboardType="phone-pad"
        value={values.phone}
        onChangeText={handleChange('phone')}
        onBlur={handleBlur('phone')}
      />
      {touched.phone && errors.phone && (
        <Text style={[t.textRed500]}>{errors.phone}</Text>
      )}
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
        placeholder="Enter customer address"
        value={values.address}
        onChangeText={handleChange('address')}
        onBlur={handleBlur('address')}
      />
      {touched.address && errors.address && (
        <Text style={[t.textRed500]}>{errors.address}</Text>
      )}
    </View>
  );
};

export default CustomerInfo;
