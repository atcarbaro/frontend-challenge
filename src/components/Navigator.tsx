import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Register/RegisterScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function Navigator(){
  const {signIn} = useSelector((state: RootState) => state.signIn);

  return (
    <NavigationContainer>
      {!signIn ? 
        <Stack.Navigator     
          screenOptions={{
            headerShown: false,
          }} 
        >
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
        :
        <TabNavigator />
      }
    </NavigationContainer>
  );
}

export default Navigator;
