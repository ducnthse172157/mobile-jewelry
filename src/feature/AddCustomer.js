// src/feature/AddCustomer.js
import React, { useState } from "react";
import { View, TextInput, Text, Pressable, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";
import { Formik } from 'formik';
import { CustomerSchema } from "../constants/schema";
import { CreateCustomer, FetchCustomers, FetchCustomerById } from "../service/Order";

const AddCustomer = ({ onAddCustomer, onNext, onViewCustomer }) => {
  const [showForm, setShowForm] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleSearch = async (phone) => {
    try {
      const customers = await FetchCustomers();
      const filteredCustomers = customers.filter(cust => cust.phone.includes(phone));
      setSearchResults(filteredCustomers);
    } catch (error) {
      console.error("Error searching customers:", error);
    }
  };

  const handleSelectCustomer = async (customerId) => {
    try {
      const customer = await FetchCustomerById(customerId);
      setSelectedCustomer(customer);
      onViewCustomer(customer);
    } catch (error) {
      console.error("Error fetching customer by ID:", error);
    }
  };

  const handleSave = async (values) => {
    if (selectedCustomer) {
      return;
    }
    try {
      const newCustomer = await CreateCustomer(values);
      onAddCustomer(newCustomer);
      setShowForm(false);
      onNext();
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <View style={[t.p4, t.borderB, t.borderPink600]}>
      {showForm ? (
        <Formik
          initialValues={{ name: "", age: "", phone: "", address: "" }}
          validationSchema={CustomerSchema}
          onSubmit={values => handleSave(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <Text style={[t.textPink800, t.textLg, t.mB2]}>Customer Information</Text>
              <TextInput
                style={[t.border, t.borderPink600, t.p2, t.mB2]}
                placeholder="Phone"
                onChangeText={(text) => {
                  handleChange('phone')(text);
                  handleSearch(text);
                }}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              {touched.phone && errors.phone && <Text style={[t.textRed600]}>{errors.phone}</Text>}
              <ScrollView style={[t.maxH40, t.border, t.borderPink600, t.mB2]}>
                {searchResults.map((item) => (
                  <Pressable key={item._id} onPress={() => handleSelectCustomer(item._id)}>
                    <Text style={[t.p2]}>{item.name}</Text>
                  </Pressable>
                ))}
              </ScrollView>
              {selectedCustomer ? (
                <>
                  <Text style={[t.mT2]}>{`Name: ${selectedCustomer.name}`}</Text>
                  <Text style={[t.mT2]}>{`Age: ${selectedCustomer.age}`}</Text>
                  <Text style={[t.mT2]}>{`Phone: ${selectedCustomer.phone}`}</Text>
                  <Text style={[t.mT2]}>{`Address: ${selectedCustomer.address}`}</Text>
                </>
              ) : (
                <>
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
                    placeholder="Address"
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                  />
                  {touched.address && errors.address && <Text style={[t.textRed600]}>{errors.address}</Text>}
                </>
              )}
              <View style={[t.flexRow, t.justifyBetween]}>
                <Pressable style={[t.bgPink600, t.p2, t.roundedLg]} onPress={handleSubmit}>
                  <Text style={[t.textWhite]}>Save Changes</Text>
                </Pressable>
                <Pressable style={[t.bgGray600, t.p2, t.roundedLg]} onPress={() => setShowForm(false)}>
                  <Text style={[t.textWhite]}>Cancel</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      ) : (
        <Pressable onPress={() => setShowForm(true)}>
          <Text style={[t.textPink800, t.textLg]}>Add Customer Info</Text>
        </Pressable>
      )}
    </View>
  );
};

export default AddCustomer;
