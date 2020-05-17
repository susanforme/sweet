import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from '@/screens/screens/tab/MessageScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';

const MessageStack = createStackNavigator<StackList>();

export default function MessageStackScreen() {
  const height = useHeaderHeight();

  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="Message"
        component={MessageScreen}
        options={{
          ...getDefaultHeaderStyle(height, 1),
          headerTitle: '消息',
        }}></MessageStack.Screen>
    </MessageStack.Navigator>
  );
}

type StackList = {
  Message: undefined;
};
