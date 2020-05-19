import {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

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

/**
 * user格式
 */
export interface UserResponse {
  _id: string;
  userName: string;
  headImg: string;
}

/**
 * LoginBottomProps
 */
export interface LoginBottomProps {
  isRegister: boolean;
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
  fade: Function;
  style?: StyleProp<ViewStyle>;
}

/**
 * loginModuleProps
 */
export interface LoginModuleProps {
  addUser: (user: UserResponse) => void;
  isLogin: boolean;
}

/**
 * MainProps
 */
export interface MainProps {
  isLogin: boolean;
  isLoading: boolean;
}

/**
 * 主页面的堆栈列表,stack 屏幕列表
 */
export type MainStackList = {
  Tab: undefined;
  Chat: undefined;
  Login: undefined;
  Profile: undefined;
  Release: undefined;
  Search: undefined;
  Setting: undefined;
};

/**
 * 有底部栏的4个标签页的屏幕列表
 */
export type TabStackList = {
  Home: undefined;
  Message: undefined;
  Sell: undefined;
  User: undefined;
};

/**
 * 在目录screens screens tab下的userscreen的参数列表
 */
export interface UserScreenProps {
  isLogin: boolean;
  user: MyAppState['user'];
}

/**
 * usertoparea 的props
 */
export interface UserTopAreaProps {
  userName: string;
  headImg: string;
  _id: string;
  isDefault: boolean;
}

/**
 * UserFeatureArea props
 */
export interface UserFeatureAreaProps {
  title: string;
  data: {
    title: string;
    count: number;
    img: string;
    style?: StyleProp<ViewStyle>;
  }[];
  style?: StyleProp<ViewStyle>;
}

/**
 * 用户页面profile的response
 */
export interface ProfileUserResponse {
  status: 0 | 1;
  data: {
    buyCount: number;
    sellCount: number;
    totalCount: number;
  };
}

/**
 * 设置页面单行props
 */
export interface SingleLineSettingAreaProps {
  iconName: string;
  size?: number;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
