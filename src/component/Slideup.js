import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { t } from "react-native-tailwindcss";

const SlideUpView = ({ visible, children }) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  return (
    <Animated.View
      style={[
        t.absolute,
        t.bottom0,
        t.wFull,
        t.z10,
        { transform: [{ translateY }] },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SlideUpView;
