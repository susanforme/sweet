import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SettingStackList} from '@/types';
import SettingStackScreen from '@/screens/stacks/setting/SettingStackScreen';
import LocationStackScreen from '@/screens/stacks/setting/LocationStackScreen';
import AboutStackScreen from '@/screens/stacks/setting/AboutStackScreen';
import {getDefaultHeaderStyle} from '@/style/header';
import {widthScale} from '@/style';
import SettingHeader from '@/components/setting/SettingHeader';
import AddLocationScreen from '@/screens/stacks/setting/AddLocationScreen';

const SettingStack = createStackNavigator<SettingStackList>();

export default function Setting() {
  const paddingTop = StatusBar.currentHeight || 30;
  return (
    <SettingStack.Navigator initialRouteName="SettingScreen">
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingStackScreen}
        options={{
          title: '设置',
          ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.6, 'white'),
          header: SettingHeader,
        }}></SettingStack.Screen>
      <SettingStack.Screen
        name="LocationScreen"
        options={{
          title: '我的地址',
          ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.6, 'white'),
        }}
        component={LocationStackScreen}></SettingStack.Screen>
      <SettingStack.Screen
        name="AboutScreen"
        options={{
          title: '关于',
          ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.6, 'white'),
        }}
        component={AboutStackScreen}></SettingStack.Screen>
      <SettingStack.Screen
        name="AddLocationScreen"
        options={{
          title: '新增地址',
          ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.6, 'white'),
        }}
        component={AddLocationScreen}></SettingStack.Screen>
    </SettingStack.Navigator>
  );
}
