import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from '@/screens/screens/tab/MessageScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';
import {StatusBar} from 'react-native';
import Header from '@/components/comm/Header';

const MessageStack = createStackNavigator<StackList>();

export default function MessageStackScreen() {
  const height = useHeaderHeight();
  const paddingTop = StatusBar.currentHeight || 30;

  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="Message"
        component={MessageScreen}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.7),
          header: () => Header('消息'),
        }}></MessageStack.Screen>
    </MessageStack.Navigator>
  );
}

type StackList = {
  Message: undefined;
};
