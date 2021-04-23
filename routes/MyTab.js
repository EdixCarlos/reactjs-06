import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginStack, MyStack} from './MyStack';
import Videos from '../screens/Videos'
const MyTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginStack} />
      <Tab.Screen name="Home" component={MyStack} />
      <Tab.Screen name="Videos" component={Videos} />
    </Tab.Navigator>
  );
};

export default MyTab;
