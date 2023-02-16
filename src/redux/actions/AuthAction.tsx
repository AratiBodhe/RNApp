import {IS_USER_LOGIN} from '../ActionTypes';

export const AuthAction = (isLogin: boolean) => {
  console.log('isUserLogin', isLogin);
  return {
    type: IS_USER_LOGIN,
    payload: isLogin,
  };
};
