import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TextInputCompo} from '../components/TextInputComp';
import {GetText} from '../constants/GetText';
export const SignUpScreen = ({navigation}) => {
  const [userSignUpData, setUserSignUpData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const setEmail = (text: string) => {
    setUserSignUpData({...userSignUpData, email: text});
  };
  const setPassword = (text: string) => {
    setUserSignUpData({...userSignUpData, password: text});
  };
  const setConfirmPassword = (text: string) => {
    setUserSignUpData({...userSignUpData, confirmPassword: text});
  };

  const onSignUp = () => {
    if (userSignUpData.password === userSignUpData.confirmPassword) {
      console.log('password matched');
      signUpUser();
    } else {
      console.log('password not mached');
    }
  };
  const signUpUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        userSignUpData.email,
        userSignUpData.password,
      )
      .then(() => {
        // console.log('User account created & signed in!');
        navigation.navigate('Sign');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
  return (
    <View>
      <Text>SignUpScreen</Text>
      <TextInputCompo
        placeholder={GetText.USERNAME}
        value={userSignUpData.email}
        onChangeText={(text: any) => {
          setEmail(text);
        }}
      />
      <TextInputCompo
        placeholder={GetText.PASSWORD}
        value={userSignUpData.password}
        onChangeText={(text: any) => {
          setPassword(text);
        }}
      />
      <TextInputCompo
        placeholder={GetText.CONFIRM_PASSWORD}
        value={userSignUpData.confirmPassword}
        onChangeText={(text: string) => {
          setConfirmPassword(text);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          onSignUp();
        }}>
        <Text>{GetText.REGISTER}</Text>
      </TouchableOpacity>
    </View>
  );
};
