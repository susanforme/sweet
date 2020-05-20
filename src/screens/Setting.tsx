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
import {useNavigation} from '@react-navigation/native';
import {Tip} from 'beeshell/dist/components/Tip';

function Setting({clearUserData, isLogin}: SettingProps) {
  const dialogRef = useRef<Dialog>(null);
  const [msg, setMsg] = useState('');
  const [isLogout, setIsLogout] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    if (msg) {
      dialogRef.current?.open();
    }
  }, [msg]);
  const Top = getAreaByData([
    {title: '个人资料设置', iconName: 'user'},
    {title: '收货地址', iconName: 'enviromento'},
    {title: '鱼塘', iconName: 'team'},
    {title: '用户', iconName: 'github'},
    {title: '黑名单', iconName: 'user'},
  ]);
  const Middle = getAreaByData([
    {title: '宝贝自动回复', iconName: 'swap'},
    {title: '图片质量设置', iconName: 'picture'},
    {title: '自动播放视频设置', iconName: 'playcircleo'},
    {title: '语音电话设置', iconName: 'phone'},
    {title: '隐私', iconName: 'infocirlceo'},
  ]);
  const Bottom = getAreaByData(
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
          navigation.navigate('About');
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
  );
  const Refresh = getAreaByData([{title: '清除缓存', iconName: 'reload1'}]);
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

export default connect(stateToProps, dispatchToProps)(Setting);
