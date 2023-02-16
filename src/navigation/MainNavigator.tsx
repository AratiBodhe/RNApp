import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthStackNavigator} from './stackNav/AuthStackNavigator';
import {HomeStackNav} from './stackNav/HomeStackNavigator';

export const MainNavigator = () => {
  const selector = useSelector(state => state);
  useEffect(() => {
    // console.log('selector', selector.isUserLogin.isLogin);
  });
  return (
    <NavigationContainer>
      {selector && selector.isUserLogin && selector.isUserLogin.isLogin ? (
        <HomeStackNav />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};
