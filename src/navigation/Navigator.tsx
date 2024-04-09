import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens, StackNavigatorScreens} from './types';
import {MenuScreen} from '../screens/Menu';
import {MyIpInfoScreen} from '../screens/MyIpInfo';
import {FindByIp} from '../screens/FindByIp';

const Stack = createNativeStackNavigator<StackNavigatorScreens>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Menu}>
        <Stack.Screen name={Screens.Menu} component={MenuScreen} />
        <Stack.Screen name={Screens.MyIpInfo} component={MyIpInfoScreen} />
        <Stack.Screen name={Screens.FindIpInfo} component={FindByIp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
