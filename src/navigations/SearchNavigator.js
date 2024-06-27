import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import SearchScreenDetails from '../screen/SearchScreenDetails';

const Stack = createSharedElementStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreenDetails}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;