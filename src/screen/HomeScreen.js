import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
  <View className="flex-1 items-center bg-red-500 ">
      <Text className="text-blue-700">FREE US SHIPPING ON ALL JEWELRY</Text>
      <StatusBar style="auto" />
    </View>
  );
}


