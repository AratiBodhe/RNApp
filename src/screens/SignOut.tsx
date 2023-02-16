import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
export const SignOut = () => {
  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('signout');
      });
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onSignOut();
        }}>
        <Text>SIGNOUT</Text>
      </TouchableOpacity>
    </View>
  );
};
