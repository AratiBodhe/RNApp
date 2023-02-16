import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TextInputCompo} from '../components/TextInputComp';
import {useSelector, useDispatch} from 'react-redux';
import {GetColors} from '../constants/GetColors';
import {GetText} from '../constants/GetText';
import {hp, wp} from '../utils/Dimension';
import {AuthAction} from '../redux/actions/AuthAction';

export const SignInScreen = ({navigation}) => {
  const [userLogInData, setUserLoginData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const setEmail = (text: string) => {
    setUserLoginData({...userLogInData, email: text});
  };
  const setPassword = (text: string) => {
    setUserLoginData({...userLogInData, password: text});
  };

  const onSignIn = () => {
    auth()
      .signInWithEmailAndPassword(userLogInData.email, userLogInData.password)
      .then(userCredential => {
        console.log('usercredential', userCredential);
        dispatch(AuthAction({isLogin: true}));
        // navigation.navigate('Home');
      })
      .catch(error => {
        if (error.Error == 'auth/email-already-in-use') {
          console.log(' email address is already in use by another account');
        } else if (error.Error == 'auth/wrong-password') {
          console.log('password eror');
        } else {
          console.log('error', error);
        }
      });
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Text style={styles.login}>{GetText.LOGIN}</Text>
      <TextInputCompo
        placeholder={GetText.USERNAME}
        value={userLogInData.email}
        onChangeText={(text: string) => {
          setEmail(text);
        }}
      />
      <TextInputCompo
        placeholder={GetText.PASSWORD}
        value={userLogInData.password}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          onSignIn();
        }}>
        <Text>{GetText.LOGIN}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}>
        <Text style={styles.register}>{GetText.REGISTER}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: wp(7),
    color: GetColors.BLACK,
    paddingTop: hp(18),
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: hp(10),
  },
  register: {
    color: GetColors.tomato,
    fontSize: wp(5),
    paddingTop: hp(10),
    marginLeft: wp(10),
  },
});
