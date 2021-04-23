import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LoginStack} from './MyStack';
import MyTab from './MyTab';
const MyDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginStack} />
      <Drawer.Screen name="Home" component={MyTab} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
