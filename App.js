import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './src/screen/ProductScreen';
import InfoScreen from './src/screen/InfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductScreen">
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} options={{ title: 'Product Info' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
