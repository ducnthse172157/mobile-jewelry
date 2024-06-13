import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { t } from 'react-native-tailwindcss';

const SplashScreen = () => {
  const shineAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(shineAnimation, {
      toValue: 1,
      duration: 3000, 
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = shineAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 25], 
  });

  return (
    <View style={[t.flex1, t.bgPink500, t.flex, t.justifyCenter, t.itemsCenter]}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Text style={[t.textWhite, t.text6xl, t.fontBold, t.textCenter ]}>
          Alumina
        </Text>
      </Animated.View>
    </View>
  );
};


export default SplashScreen;
