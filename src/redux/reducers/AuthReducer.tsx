import {IS_USER_LOGIN} from '../ActionTypes';

const initialState = {
  isUserLogin: null,
};

export const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_USER_LOGIN:
      return {
        ...state,
        isUserLogin: action.payload,
      };
    default:
      return state;
  }
};
