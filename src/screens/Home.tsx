import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image
          source={require('../assests/menu.png')}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <Text>HomeScreen</Text>
    </View>
  );
};
