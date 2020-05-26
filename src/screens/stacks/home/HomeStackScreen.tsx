import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@/screens/screens/tab/HomeScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';
import {StatusBar} from 'react-native';
import Header from '@/components/comm/Header';

const HomeStack = createStackNavigator<StackList>();

export default function HomeStackScreen() {
  const paddingTop = StatusBar.currentHeight || 30;
  const height = useHeaderHeight();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.6),
          header: () => Header('首页'),
        }}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

type StackList = {
  Home: undefined;
};
