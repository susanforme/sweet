import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@/screens/screens/tab/HomeScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';

const HomeStack = createStackNavigator<StackList>();

export default function HomeStackScreen() {
  const height = useHeaderHeight();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...getDefaultHeaderStyle(height),
          headerTitle: '首页',
        }}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

type StackList = {
  Home: undefined;
};
