import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DownloadInvoice,
  HomeScreen,
  SignInScreen,
  SignUpScreen,
} from '../../screens';
import MyDrawer from '../drawerNav/DrawerNav';

const HomeStack = createStackNavigator();
export const HomeStackNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={MyDrawer} />
      <HomeStack.Screen name="DownloadInvoice" component={DownloadInvoice} />
    </HomeStack.Navigator>
  );
};
