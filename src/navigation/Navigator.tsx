import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens, StackNavigatorScreens} from './types';
import {MainScreen} from '../screens/Main';

const Stack = createNativeStackNavigator<StackNavigatorScreens>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Main}>
        <Stack.Screen name={Screens.Main} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
