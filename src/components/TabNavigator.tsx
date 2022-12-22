import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { H6, normalize, windowHeight, minValue, colors } from '../utils';
import ChatScreen from '../screens/Chat/ChatScreen';
import AccountScreen from '../screens/Account/AccountScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: normalize(H6), fontWeight: '700', textTransform: 'capitalize' },
        tabBarIndicatorStyle: { backgroundColor: colors.softOrange, height: normalize(minValue) },
        tabBarActiveTintColor: colors.softOrange,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle:{ height: windowHeight * 0.1, justifyContent: 'flex-end' }
      }}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Cuenta" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;