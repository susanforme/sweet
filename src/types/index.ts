/**
 * redux初始状态类型
 */
export interface MyAppState {
  isLogin: boolean;
  isLoading: boolean;
  err: {
    verifyAccount: string;
  };
  user: {
    _id: string;
    headImg: string;
    userName: string;
  };
}

/**
 * check请求的response
 */
export interface CheckResponse {
  status: 0 | 1;
  data: {
    msg?: string;
    _id?: string;
    userName?: string;
    headImg?: string;
  };
}
