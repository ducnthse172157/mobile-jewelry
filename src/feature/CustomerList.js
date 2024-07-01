import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { FetchCustomers } from '../service/Order';


const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={[t.textCenter, t.textRed500]}>Error: {error.message}</Text>;
  }

  return (
    <View style={[t.m4]}>
      <Text style={[t.textCenter, t.text2xl, t.fontBold, t.mB4, t.textPink700]}>Customer List</Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={[t.p4, t.borderB, t.borderGray300]}>
            <Text style={[t.textLg]}>{item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CustomerList;
