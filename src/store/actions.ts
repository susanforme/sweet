// import AsyncStorage from '@react-native-community/async-storage';
//这里进行常用数据存放
import {ActionTypes} from './actionTypes';
import {axios} from '@/api';
import {CheckResponse} from '@/types';

/**
 * 加载常用数据,最后用promise合并
 */
export const loadData = () => {
  return (dispatch: Function) => {
    loadDataAsyncStorage().then((data) => {
      const action = {
        type: ActionTypes.LOAD_DATA,
        data,
      };
      dispatch(action);
    });
  };
};

/**
 * 校验是否登录
 */
export const verifyAccount = () => {
  return (dispath: Function) => {
    const isLoading = false;
    axios
      .get<CheckResponse>('/user/check')
      .then((res) => {
        const status = res.data.status;
        if (status) {
          return dispath({
            type: ActionTypes.CHECK_LOGIN_STATUS,
            data: {isLogin: true, isLoading},
          });
        }
        dispath({
          type: ActionTypes.CHECK_LOGIN_STATUS,
          data: {isLogin: false, isLoading},
        });
      })
      .catch(() => {
        dispath({
          type: ActionTypes.CHECK_LOGIN_STATUS,
          data: {isLogin: false, isLoading},
        });
      });
  };
};

async function loadDataAsyncStorage() {
  const isLoading = false;
  return {isLoading};
}
