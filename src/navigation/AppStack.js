import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Login from '../page/Login';
import Signup from '../page/Signup';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Drawer" component={AppDrawer} />
    </Stack.Navigator>
  )
}

export default AppStack
