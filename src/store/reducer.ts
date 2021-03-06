import {ActionTypes} from './actionTypes';
import {MyAppState} from '@/types';

const initState = {
  isLogin: false,
  isLoading: true,
  user: {
    _id: '',
    userName: '',
    headImg: '',
  },
  err: {
    verifyAccount: '',
  },
  forceRefresh: false,
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
      newState.user = action.data.user || {};
      break;
    }
    case ActionTypes.ADD_USER_MSG: {
      newState.isLogin = true;
      newState.user = action.data.user;
      break;
    }
    case ActionTypes.CLEAR_USER_DATA: {
      newState.user = {_id: '', userName: '', headImg: ''};
      newState.isLogin = false;
      break;
    }
    case ActionTypes.SET_DEFAULT_LOCATION: {
      newState.location = action.data.location;
      break;
    }
    case ActionTypes.CHANGE_FISH_BOND_STATUS: {
      newState.fishBondStatus = action.data.status;
      break;
    }
    case ActionTypes.CHANGE_USER_HEAD_IMG: {
      newState.user.headImg = action.data.headImg;
      break;
    }
    case ActionTypes.ENABLE_FORCE_REFRESH: {
      newState.forceRefresh = action.data.status;
      break;
    }
  }
  return newState;
};
