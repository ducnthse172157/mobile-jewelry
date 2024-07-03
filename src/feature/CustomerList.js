import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchCustomers } from '../service/Order';
import LoadingAnimation from '../component/Loading';
import { useNavigation } from '@react-navigation/native';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await FetchCustomers();
        setCustomers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <Text style={[t.textCenter, t.textRed500]}>Error: {error.message}</Text>;
  }

  return (
    <ScrollView style={[t.mB20]}>
      <Text style={[t.textCenter, t.text2xl, t.fontBold, t.mB4, t.textPink700]}>Customer List</Text>
      {customers.map((item) => (
        <Pressable
          key={item._id}
          style={[t.p4, t.borderB, t.borderGray300]}
          onPress={() => navigation.navigate('Customer Detail', { customerId: item._id })}
        >
          <Text style={[t.textLg, t.textPink700]}>{item.name}</Text>
          <Text>Age: {item.age}</Text>
          <Text>Phone: {item.phone}</Text>
          <Text>Address: {item.address}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CustomerList;
