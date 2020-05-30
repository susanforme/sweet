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
};

export default (state = initState, action: any) => {
  let newState: MyAppState = JSON.parse(JSON.stringify(state));
  if (!(state as MyAppState).location) {
    newState.location = {
      area: '',
      _id: '',
      phoneNum: '',
      name: '',
    };
    newState.fishBondStatus = false;
  }
  console.log((state as MyAppState).record);

  console.log(!(state as MyAppState).record);
  if (!(state as MyAppState).record) {
    newState.record = {};
  }
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
    case ActionTypes.EMIT_CHAT_MESSAGE: {
      let ary = newState.record[action.data.room];
      if (!ary) {
        newState.record[action.data.room] = [action.data.msg];
      } else {
        ary.push(action.data.msg);
      }
      break;
    }
    case ActionTypes.SYNC_HISTORY_MESSAGE: {
      newState.record[action.data.room] = action.data.list;

      break;
    }
  }
  return newState;
};
