import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/home/HomeStackScreen';
import MessageStackScreen from './stacks/home/MessageStackScreen';
import SellStackScreen from './stacks/home/SellStackScreen';
import UserStackScreen from './stacks/home/UserStackScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import {TabStackList} from '@/types';

const Tab = createBottomTabNavigator<TabStackList>();

export default function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: '#ffee11'}}
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: (params) => {
          let iconName = '';
          const {color, size} = params;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Sell':
              iconName = 'shoppingcart';
              break;
            case 'Message':
              iconName = 'message1';
              break;
            case 'User':
              iconName = 'user';
              break;
          }
          return <Icon name={iconName} size={size - 2} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{tabBarLabel: '首页'}}></Tab.Screen>
      <Tab.Screen
        name="Sell"
        component={SellStackScreen}
        options={{tabBarLabel: '卖闲置'}}></Tab.Screen>
      <Tab.Screen
        name="Message"
        component={MessageStackScreen}
        options={{tabBarLabel: '消息'}}></Tab.Screen>

      <Tab.Screen
        name="User"
        component={UserStackScreen}
        options={{tabBarLabel: '我的'}}></Tab.Screen>
    </Tab.Navigator>
  );
}
