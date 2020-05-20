import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SettingStackList} from '@/types';
import SettingStackScreen from './stacks/setting/SettingStackScreen';
import LocationStackScreen from './stacks/setting/LocationStackScreen';
import AboutStackScreen from '@/screens/stacks/setting/AboutStackScreen';
import {getDefaultHeaderStyle} from '@/style/header';
import {widthScale} from '@/style';
import SettingHeader from '@/components/setting/SettingHeader';

const SettingStack = createStackNavigator<SettingStackList>();

export default function Setting() {
  const paddingTop = StatusBar.currentHeight || 30;
  return (
    <SettingStack.Navigator>
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
          title: '位置',
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
    </SettingStack.Navigator>
  );
}
