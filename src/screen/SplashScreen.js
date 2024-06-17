import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss';

const SplashScreen = () => {
  const scaleAnimation = new Animated.Value(0);
  const hollowCircleAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 1400,
        useNativeDriver: true,
      }),
      Animated.timing(hollowCircleAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const mainCircleScale = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], 
  });

  const hollowCircleScale = hollowCircleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10], 
  });

  return (
    <View style={[t.flex1, t.bgPink500, t.flex, t.justifyCenter, t.itemsCenter]}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale: mainCircleScale }],
          },
        ]}
      >
        <Text style={[t.textPink500, t.text6xl, t.fontBold, t.textCenter]}>
          A
        </Text>
      </Animated.View>

      <Animated.View
        style={[
          styles.hollowCircle,
          {
            opacity: 0.3,
            transform: [{ scale: hollowCircleScale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hollowCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 30,
    borderColor: 'white',
  },
});

export default SplashScreen;
