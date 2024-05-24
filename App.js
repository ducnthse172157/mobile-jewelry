import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './component/Home Page/HomePage';

export default function App() {
  return (
    <View>
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}


