import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@/screens/screens/tab/HomeScreen';

const HomeStack = createStackNavigator<StackList>();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

type StackList = {
  Home: undefined;
};
