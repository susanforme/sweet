import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/HomeStackScreen';
import MessageStackScreen from './stacks/MessageStackScreen';
import SellStackScreen from './stacks/SellStackScreen';
import UserStackScreen from './stacks/UserStackScreen';

const Tab = createBottomTabNavigator<StackList>();

export default function TabStack() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{tabBarLabel: '首页'}}></Tab.Screen>
      <Tab.Screen
        name="Message"
        component={MessageStackScreen}
        options={{tabBarLabel: '卖闲置'}}></Tab.Screen>
      <Tab.Screen
        name="Sell"
        component={SellStackScreen}
        options={{tabBarLabel: '消息'}}></Tab.Screen>
      <Tab.Screen
        name="User"
        component={UserStackScreen}
        options={{tabBarLabel: '我的'}}></Tab.Screen>
    </Tab.Navigator>
  );
}

type StackList = {
  Home: undefined;
  Message: undefined;
  Sell: undefined;
  User: undefined;
};
