import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SubNavigator from "./SubNavigator";
import { colors, sizes } from "../constants/theme";
import { StyleSheet, Animated } from "react-native";
import Icon from "../component/Icon";
import HomeNavigator from "./HomeNavigator";
import { ToastProvider } from "../component/Toast";
import OrderNavigator from "./OrderNavigator";

const tabs = [
  {
    name: "Home",
    screen: HomeNavigator,
  },
  {
    name: "Search",
    screen: SubNavigator,
  },
  {
    name: "Favorite",
    screen: OrderNavigator,
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
        <ToastProvider>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
            }}
          >
            {tabs.map(({ name, screen }, index) => {
              return (
                <Tab.Screen
                  key={name}
                  name={name}
                  component={screen}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <Icon
                          icon={name}
                          size={40}
                          style={{
                            tintColor: focused ? colors.primary : colors.gray,
                          }}
                        />
                      );
                    },
                  }}
                  listeners={{
                    focus: () => {
                      Animated.spring(offsetAnimation, {
                        toValue: index * (sizes.width / tabs.length),
                        useNativeDriver: true,
                      }).start();
                    },
                  }}
                />
              );
            })}
          </Tab.Navigator>
        </ToastProvider>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    width: 10,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 30,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});

export default TabNavigator;
