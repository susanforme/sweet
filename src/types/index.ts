import {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

/**
 * redux状态
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
  location: {
    area: string;
    phoneNum: string;
    _id: string;
    name: string;
  };
  fishBondStatus: boolean;
}

/**
 * redux初始状态
 */

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
  Setting: {title: string} | undefined;
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
  iconName?: string;
  size?: number;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

/**
 * SettingProps
 */
export interface SettingProps {
  clearUserData: () => void;
  isLogin: boolean;
}

/**
 * SingleLineSettingArea 的数据
 */

export interface OnPressDataInSetting {
  index: number;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

/**
 * LoadingProps
 */
export interface LoadingProps {
  style?: StyleProp<TextStyle>;
  loadingStyle?: StyleProp<ViewStyle>;
  size?: number;
  show?: boolean;
  title?: string;
}

/**
 * 设置堆栈列表
 */
export type SettingStackList = {
  SettingScreen: undefined;
  LocationScreen:
    | {
        refresh: number;
      }
    | undefined;
  AboutScreen: undefined;
  AddLocationScreen: undefined;
  BlackListScreen: undefined;
  FishSettingScreen: undefined;
  DeleteAccountScreen: undefined;
  PersonalSettingScreen: undefined;
};

/**
 * LocationStackScreenProps
 */
export interface LocationStackScreenProps {
  userId: string;
  defaultLocationId: string;
  setDefaultLocation(data: SingleLocation): void;
}

/**
 * AddLocationScreenProps
 */
export interface AddLocationScreenProps {
  userId: string;
  setDefaultLocation: (data: {
    area: string;
    phoneNum: string;
    _id: string;
    name: string;
  }) => void;
}
/**
 * 单条地址
 */
export type SingleLocation = {
  area: string;
  name: string;
  phoneNum: string;
  _id: string;
};

/**
 * PostLocationResponse
 */
export interface PostLocationResponse {
  status: 0 | 1;
  data: {
    createTime: string;
    information: SingleLocation[];
    _id: string;
    user: string;
  };
}

/**
 * LocationData
 */
export interface LocationData {
  information: SingleLocation[];
}

/**
 * GetLocationResponse
 */
export interface GetLocationResponse {
  status: 0 | 1;
  data: SingleLocation[];
}

/**
 * LocationBoxProps
 */
export interface LocationBoxProps {
  data: SingleLocation;
  defaultLocationId: string;
  setDefaultLocation: (data: SingleLocation) => void;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

/**
 * FishSettingScreenProps
 */
export interface FishSettingScreenProps {
  changeFishStatus(status: boolean): void;
  defaultFish: boolean;
}
