import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Chat from '@/screens/Chat';
import Login from '@/screens/Login';
import Profile from '@/screens/Profile';
import Release from '@/screens/Release';
import Search from '@/screens/Search';
import Setting from '@/screens/Setting';
import Tabstack from '@/screens/Tabstack';

const MainStack = createStackNavigator<MainStackList>();

export default function Main() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Tabstack"
          component={Tabstack}></MainStack.Screen>
        <MainStack.Screen name="Chat" component={Chat}></MainStack.Screen>
        <MainStack.Screen name="Login" component={Login}></MainStack.Screen>
        <MainStack.Screen name="Profile" component={Profile}></MainStack.Screen>
        <MainStack.Screen name="Release" component={Release}></MainStack.Screen>
        <MainStack.Screen name="Search" component={Search}></MainStack.Screen>
        <MainStack.Screen name="Setting" component={Setting}></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

type MainStackList = {
  Tabstack: undefined;
  Chat: undefined;
  Login: undefined;
  Profile: undefined;
  Release: undefined;
  Search: undefined;
  Setting: undefined;
};
