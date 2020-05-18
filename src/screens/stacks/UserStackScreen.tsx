import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '@/screens/screens/tab/UserScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';
import UserHeader from '@/components/user/UserHeader';

const UserStack = createStackNavigator<StackList>();

export default function UserStackScreen() {
  const height = useHeaderHeight();

  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={UserScreen}
        options={{
          ...getDefaultHeaderStyle(height, 0.8),
          header: UserHeader,
        }}></UserStack.Screen>
    </UserStack.Navigator>
  );
}

type StackList = {
  User: undefined;
};
