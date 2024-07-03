// src/feature/CustomerEdit.js
import React from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { t } from "react-native-tailwindcss";
import { Formik } from 'formik';
import { CustomerSchema } from "../constants/schema";
import { UpdateCustomer } from "../service/Order";

const CustomerEdit = ({ customer, onSave }) => {
  const handleSave = async (values) => {
    try {
      const updatedCustomer = await UpdateCustomer(customer._id, values);
      onSave(updatedCustomer);
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <Formik
      initialValues={{ ...customer }}
      validationSchema={CustomerSchema}
      onSubmit={values => handleSave(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={[t.p4, t.borderB, t.borderPink600]}>
          <Text style={[t.textPink800, t.textLg, t.mB2]}>Edit Customer Information</Text>
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text style={[t.textRed600]}>{errors.name}</Text>}
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Age"
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}
          />
          {touched.age && errors.age && <Text style={[t.textRed600]}>{errors.age}</Text>}
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Phone"
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
          />
          {touched.phone && errors.phone && <Text style={[t.textRed600]}>{errors.phone}</Text>}
          <TextInput
            style={[t.border, t.borderPink600, t.p2, t.mB2]}
            placeholder="Address"
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
          />
          {touched.address && errors.address && <Text style={[t.textRed600]}>{errors.address}</Text>}
          <View style={[t.flexRow, t.justifyAround]}>
            <Pressable style={[t.bgPink600, t.p2, t.roundedLg]} onPress={handleSubmit}>
              <Text style={[t.textWhite]}>Save Changes</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default CustomerEdit;
