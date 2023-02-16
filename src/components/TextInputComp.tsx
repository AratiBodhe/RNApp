import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils/Dimension';

export const TextInputCompo = props => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.textInputView}>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInputView: {
    width: wp(85),
    height: hp(7),
    marginBottom: wp(2),
    borderWidth: 1,
    borderColor: 'gray',
  },
});
