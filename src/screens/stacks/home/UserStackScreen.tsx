import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '@/screens/screens/tab/UserScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';
import UserHeader from '@/components/user/UserHeader';
import {StatusBar} from 'react-native';

const UserStack = createStackNavigator<StackList>();

export default function UserStackScreen() {
  const height = useHeaderHeight();
  const paddingTop = StatusBar.currentHeight || 30;

  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={UserScreen}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop),
          header: UserHeader,
        }}></UserStack.Screen>
    </UserStack.Navigator>
  );
}

type StackList = {
  User: undefined;
};
