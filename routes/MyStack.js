import React from 'react';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'red',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export {LoginStack, MyStack};
