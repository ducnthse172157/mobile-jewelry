import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';
import JewelryDetailsScreen from '../screen/JewelryDetailsScreen';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import SplashScreen from '../screen/SplashScreen';

const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen onAnimationEnd={() => setSplashVisible(false)} />;
  }

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
          }}
        />
        <Stack.Screen
          name="JewelryDetails"
          component={JewelryDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;