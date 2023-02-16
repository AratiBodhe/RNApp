import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen, SignUpScreen} from '../../screens';

const AuthStack = createStackNavigator();
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
