/**
 * redux初始状态类型
 */
export interface MyAppState {
  isLogin: boolean;
  isLoading: boolean;
}

/**
 * check请求的response
 */
export interface CheckResponse {
  msg: string;
  status: 0 | 1;
}
