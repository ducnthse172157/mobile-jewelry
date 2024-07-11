import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchCustomers } from '../service/Order';
import LoadingAnimation from '../component/Loading';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import SearchCustomer from '../component/SearchCustomer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const data = await FetchCustomers();
      setCustomers(data);
      setFilteredCustomers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCustomers();
    }, [])
  );

  const handleSearch = (query) => {
    const filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query.toLowerCase()) ||
        customer.phone.includes(query)
    );
    setFilteredCustomers(filtered);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <Text style={[t.textCenter, t.textRed500]}>Error: {error.message}</Text>
    );
  }

  return (
    <ScrollView style={[t.mB20]}>
      <View style={[t.pX4, t.pT4]}>
        <Text style={[t.textCenter, t.text2xl, t.fontBold, t.textPink700]}>
          Customer List
        </Text>
        <SearchCustomer onSearch={handleSearch} />
      </View>
      {filteredCustomers.map((item) => (
        <View key={item._id} style={[t.p4, t.borderB, t.borderGray300]}>
          <Pressable
            onPress={() =>
              navigation.navigate('Customer Detail', { customerId: item._id })
            }
          >
            <Text style={[t.textLg, t.textPink700]}>{item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('CustomerEdit', { customer: item })
            }
            style={[t.absolute, t.top0, t.right0, t.p2]}
          >
            <MaterialIcons name="edit" size={24} color="black" />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default CustomerList;
