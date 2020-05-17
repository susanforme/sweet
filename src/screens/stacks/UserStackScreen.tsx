import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '@/screens/screens/tab/UserScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';

const UserStack = createStackNavigator<StackList>();

export default function UserStackScreen() {
  const height = useHeaderHeight();

  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={UserScreen}
        options={{
          ...getDefaultHeaderStyle(height, 1),
          headerTitle: '消息中心',
        }}></UserStack.Screen>
    </UserStack.Navigator>
  );
}

type StackList = {
  User: undefined;
};
