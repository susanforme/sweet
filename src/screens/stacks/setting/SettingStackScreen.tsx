import React, {useRef, useState, useEffect} from 'react';
import {ScrollView, Clipboard} from 'react-native';
import getAreaByData from '@/components/comm/SingleLineSettingArea';
import {Button} from 'beeshell/dist/components/Button';
import {widthScale} from '@/style';
import {axios} from '@/api';
import {Dialog} from 'beeshell/dist/components/Dialog';
import {connect} from 'react-redux';
import {MyAppState, SettingProps} from '@/types';
import {ActionTypes} from '@/store/actionTypes';
import {
  useNavigation,
  NavigationProp,
  NavigationState,
} from '@react-navigation/native';
import {Tip} from 'beeshell/dist/components/Tip';
import AsyncStorage from '@react-native-community/async-storage';

function SettingStackScreen({clearUserData, isLogin}: SettingProps) {
  const dialogRef = useRef<Dialog>(null);
  const clearDialogRef = useRef<Dialog>(null);
  const [msg, setMsg] = useState('');
  const [isLogout, setIsLogout] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    if (msg) {
      dialogRef.current?.open();
    }
  }, [msg]);
  const topData = getTopData(navigation);
  const middleData = getMiddleData(navigation);
  const bottomData = getBottomData(navigation);
  const Top = getAreaByData(topData[0], topData[1], topData[2]);
  const Middle = getAreaByData(middleData[0], middleData[1], middleData[2]);
  const Bottom = getAreaByData(bottomData[0], bottomData[1], bottomData[2]);
  const Refresh = getAreaByData(
    [{title: '清除缓存', iconName: 'reload1'}],
    null,
    [
      {
        index: 0,
        onPress: () => {
          clearDialogRef.current?.open();
        },
      },
    ],
  );
  return (
    <ScrollView>
      {Top}
      {Middle}
      {Bottom}
      {Refresh}
      <Button
        disabled={!isLogin}
        type="danger"
        style={{margin: 15 * widthScale}}
        onPress={() => {
          axios
            .get('/user/logout')
            .then(() => {
              setIsLogout(true);
              clearUserData();
              setMsg('注销成功');
              AsyncStorage.clear();
            })
            .catch(() => {
              setMsg('注销失败');
            });
        }}>
        退出登录
      </Button>
      <Dialog
        ref={dialogRef}
        cancelLabel={null}
        bodyText={msg}
        title="注销提示"
        confirmCallback={() => {
          if (isLogout) {
            navigation.navigate('Tab');
          }
        }}
        cancelLabelText=""></Dialog>
      <Dialog
        ref={clearDialogRef}
        title="警告!"
        confirmLabelTextStyle={{color: 'red'}}
        cancelLabelTextStyle={{color: 'green'}}
        confirmCallback={() => {
          AsyncStorage.clear();
        }}
        bodyText="你确定要清楚所有缓存吗?"></Dialog>
    </ScrollView>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
});

const dispatchToProps = (dispatch: Function) => ({
  clearUserData() {
    const actions = {
      type: ActionTypes.CLEAR_USER_DATA,
    };
    dispatch(actions);
  },
});

export default connect(stateToProps, dispatchToProps)(SettingStackScreen);

function getTopData(navigation: Navigation): any {
  return [
    [
      {title: '个人资料设置', iconName: 'user'},
      {title: '收货地址', iconName: 'enviromento'},
      {title: '鱼塘', iconName: 'team'},
      {title: '账号', iconName: 'github'},
      {title: '黑名单', iconName: 'user'},
    ],
    null,
    [
      {
        index: 1,
        onPress: () => {
          navigation.navigate('Setting', {
            screen: 'LocationScreen',
            title: '关于',
          });
        },
      },
      {
        index: 4,
        onPress: () => {
          navigation.navigate('Setting', {
            screen: 'BlackListScreen',
          });
        },
      },
      {
        index: 2,
        onPress: () => {
          navigation.navigate('Setting', {
            screen: 'FishSettingScreen',
          });
        },
      },
      {
        index: 3,
        onPress: () => {
          navigation.navigate('Setting', {
            screen: 'DeleteAccountScreen',
          });
        },
      },
      {
        index: 0,
        onPress: () => {
          navigation.navigate('Setting', {
            screen: 'PersonalSettingScreen',
          });
        },
      },
    ],
  ];
}

function getMiddleData(navigation: Navigation): any {
  return [
    [
      {title: '宝贝自动回复', iconName: 'swap'},
      {title: '图片质量设置', iconName: 'picture'},
      {title: '自动播放视频设置', iconName: 'playcircleo'},
      {title: '语音电话设置', iconName: 'phone'},
      {title: '隐私', iconName: 'infocirlceo'},
    ],
  ];
}

function getBottomData(navigation: Navigation): any {
  return [
    [
      {title: '关于甜虾', iconName: 'checkcircleo'},
      {title: '把甜虾推荐给朋友', iconName: 'hearto'},
      {title: '社区公约', iconName: 'notification'},
    ],
    null,
    [
      {
        index: 0,
        onPress: () => {
          navigation.navigate('Setting', {
            screen: 'AboutScreen',
            title: '关于',
          });
        },
      },
      {
        index: 1,
        onPress: () => {
          Clipboard.setString(
            '世界上最好的App,甜虾二手交易现已开放下载!,快去www.wdf5.com下载吧!',
          );
          Tip.show('地址已经复制,快去发送给朋友吧!', 1000);
        },
      },
    ],
  ];
}

type Navigation = NavigationProp<
  Record<string, object | undefined>,
  string,
  NavigationState,
  {},
  {}
>;
