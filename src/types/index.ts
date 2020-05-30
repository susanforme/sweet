import {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
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
  record: {
    [room: string]:
      | {
          createTime: string;
          msg: string;
          send: string;
          receive: string;
        }[]
      | undefined;
  };
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
  Tab: {screen: 'Home' | 'Message' | 'User' | 'Sell'};
  Chat: {userId: string; userName: string; headImg: string};
  Login: undefined;
  Profile: undefined;
  Release: undefined;
  Search: undefined;
  Setting: {title: string} | undefined;
  Classificat: {kindId: string; kindName: string};
  Detail: {commodityId: string};
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
  showRightLabel?: boolean;
  showRightText?: boolean;
  rightText?: string;
  rightChild?: JSX.Element | null;
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

/**
 * PersonalSettingScreenProps
 */
export interface PersonalSettingScreenProps {
  user: MyAppState['user'];
  changeHeadImg(headImg: string): void;
}

/**
 * SearchInputProps
 */
export interface SearchInputProps {
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  iconSize?: number;
  editable?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

/**
 * HomeSwiperProps
 */
export interface HomeSwiperProps {}

/**
 * HomeSwiperInitData
 */
export type HomeSwiperInitData = {
  _id: string;
  imgPath: string;
  commodityId?: string;
}[];

/**
 * KindAreaGetResponse
 */
export interface KindAreaGetResponse {
  data: {
    _id: string;
    imgPath: string;
    kindName: string;
  }[];
  status: 0 | 1;
}

/**
 * RecommendGetResponse
 */
export interface RecommendGetResponse {
  status: 0 | 1;
  data: {
    _id: string;
    description: string;
    imgPath: Array<string>;
    user: {
      userName: string;
      headImg: string;
    };
    price: number;
  }[];
}

/**
 * RefreshListProps
 */
export interface RefreshListProps<DataT> {
  data: DataT | undefined;
  onRefresh?: (() => void) | undefined;
  isRefresh?: boolean;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null | undefined;
  isToTop?: boolean;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  enabelRefresh?: boolean;
}

/**
 * getClassificationResponse
 */
export interface getClassificationResponse {
  status: 0 | 1;
  data: {
    _id: string;
    description: string;
    imgPath: Array<string>;
    user: {
      userName: string;
      headImg: string;
    };
    price: number;
  }[];
}

/**
 * getInfoResponse
 */
export interface getInfoResponse {
  status: 0 | 1;
  data: {
    _id: string;
    comment: {
      comment: string;
      createTime: string;
      userId: {
        _id: string;
        headImg: string;
        userName: string;
      };
    }[];
    createTime: string;
    description: string;
    imgPath: Array<string>;
    isSale: boolean;
    kind: string;
    price: number;
    user: {
      _id: string;
      headImg: string;
      userName: string;
      createTime: string;
    };
  };
}

/**
 * CommentProps
 */
export interface CommentProps {
  comment: getInfoResponse['data']['comment'] | undefined;
  setIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * UserMsgProps
 */
export interface UserMsgProps {
  user: getInfoResponse['data']['user'] | undefined;
  myUserMsg: {
    _id: string;
    headImg: string;
    userName: string;
  };
}
/**
 * DetailContentTopProps
 */
export interface DetailContentTopProps {
  data: getInfoResponse['data'] | undefined;
}

/**
 * DetailBottomAreaProps
 */
export interface DetailBottomAreaProps {
  toEnd: Function;
  myUserMsg: {
    _id: string;
    headImg: string;
    userName: string;
  };
  commodityId: string | undefined;
  isLogin: boolean;
  isInput: boolean;
  setIsInput: React.Dispatch<React.SetStateAction<boolean>>;
  data: getInfoResponse['data'] | undefined;
  setData: React.Dispatch<React.SetStateAction<DetailBottomAreaProps['data']>>;
  user:
    | {
        _id: string;
        userName: string;
        headImg: string;
        createTime: string;
      }
    | undefined;
}

/**
 * SearchHeaderProps
 */
export interface SearchHeaderProps {
  search: (content: string) => any;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * 数字键盘参数
 */
export interface NumKeyboardProps {
  price: string[];
  setPrice: React.Dispatch<React.SetStateAction<string[]>>;
}

/**
 * 底部选择分类参数
 */
export interface BottomCategoryProps {
  setKind: React.Dispatch<
    React.SetStateAction<KindAreaGetResponse['data'][0] | undefined>
  >;
}

/**
 * 消息列表页面参数
 */
export interface MessageScreenProps {
  user: {
    _id: string;
    headImg: string;
    userName: string;
  };
  isLogin: boolean;
}

/**
 * 聊天页面参数
 */
export interface ChatProps {
  user: {
    _id: string;
    headImg: string;
    userName: string;
  };
  record: {
    [room: string]:
      | {
          createTime: string;
          msg: string;
          send: string;
          receive: string;
        }[]
      | undefined;
  };
  syncLocalHistory(room: string, list: ChatData): void;
  emitChatMsg(room: string, msg: SingleChatMsg): void;
}
/**
 * 聊天页面数据
 */
export type ChatData = SingleChatMsg[];

/**
 * 单条记录
 */
export type SingleChatMsg = {
  createTime: string;
  msg: string;
  send: string;
  receive: string;
};

/**
 * 聊天记录
 */
export interface GetHistoryResponse {
  status: 0 | 1;
  data: {
    history: {
      createTime: string;
      msg: string;
      send: string;
      receive: string;
    }[];
  };
}

/**
 * OnRefreshProps
 */
export interface OnRefreshProps {
  setIsRefreshed: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<ChatData>>;
  roomId: string;
  syncLocalHistory: (room: string, list: ChatData) => void;
  users: string[];
}

/**
 * 底部输入区域参数
 */
export interface BottomInputChatProps {
  msg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  onPress?: () => any;
}

/**
 * 聊天返回信息
 */
export interface BackChatResponse {
  data: {
    createTime: string;
    send: string;
    receive: string;
    msg: string;
  };
}
