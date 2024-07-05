import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { t } from 'react-native-tailwindcss';
import AuthService from '../service/AuthService';
import Icon from 'react-native-vector-icons/Ionicons';  // Make sure to install this package or use any other icon library

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onSignInPressed = async () => {
    try {
      const response = await AuthService.login(username, password);
      if (response.success) {
        navigation.navigate('Root', { accessToken: response.accessToken });
      } else {
        Alert.alert('Login Failed', response.message);
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  return (
    <View style={[t.flex1, t.justifyCenter, t.p8, t.bgWhite]}>
      <Text style={[t.text3xl, t.fontBold, t.mB4, t.textCenter]}>LOGIN</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={[
          t.mB4,
          t.border,
          t.roundedFull,
          t.p4,
          t.textLg,
          t.textPink800,
          t.bgWhite,
          t.borderPink800,
        ]}
        placeholderTextColor="#a37a78"
      />

      <View style={[t.mB4, t.border, t.roundedFull, t.p4, t.flexRow, t.itemsCenter, t.bgWhite, t.borderPink800]}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
          style={[t.flex1, t.textLg, t.textPink800]}
          placeholderTextColor="#a37a78"
        />
        <Pressable onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="#a37a78" />
        </Pressable>
      </View>

      <Pressable
        style={[
          t.mB4,
          t.bgPink800,
          t.roundedFull,
          t.pY4,
          t.itemsCenter,
        ]}
        onPress={onSignInPressed}
      >
        <Text style={[t.textWhite, t.textLg, t.fontBold]}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;