import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { t } from 'react-native-tailwindcss';
import * as Google from 'expo-google-auth';
import * as AuthService from '../service/AuthService';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign in');
  };

  const onGoogleSignInPressed = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: 'YOUR_IOS_CLIENT_ID',
        androidClientId: 'YOUR_ANDROID_CLIENT_ID',
      });

      if (result.type === 'success') {
        await AuthService.loginWithGoogle(result.idToken);
        Alert.alert('Success', 'Logged in with Google');
      } else {
        Alert.alert('Cancelled', 'Google Sign-In cancelled');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to log in with Google');
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

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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

      <TouchableOpacity
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
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          t.bgPink800,
          t.roundedFull,
          t.pY4,
          t.itemsCenter,
        ]}
        onPress={onGoogleSignInPressed}
      >
        <Text style={[t.textWhite, t.textLg, t.fontBold]}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
