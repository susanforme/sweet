import {ActionTypes} from './actionTypes';
import {MyAppState} from '@/types';

const initState: MyAppState = {
  isLogin: false,
  isLoading: true,
  err: {
    verifyAccount: '',
  },
};

export default (state = initState, action: any) => {
  let newState: MyAppState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ActionTypes.LOAD_DATA: {
      newState.isLoading = action.data.isLoading;
      break;
    }
    case ActionTypes.CHECK_LOGIN_STATUS: {
      newState.isLogin = action.data.isLogin;
      newState.isLoading = action.data.isLoading;
      newState.err.verifyAccount = action.data.err || '';
      break;
    }
  }
  return newState;
};
