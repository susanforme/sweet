import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';
import {StatusBar} from 'react-native';
import {AssetsMessageStackList} from '@/types';
import Pact from './screens/assetsMessage/Pact';
import Community from './screens/assetsMessage/Community';
import Timeout from './screens/assetsMessage/Timeout';

const AssetsMessageStack = createStackNavigator<AssetsMessageStackList>();

export default function AssetsMessageScreen() {
  const paddingTop = StatusBar.currentHeight || 30;
  const height = useHeaderHeight();
  return (
    <AssetsMessageStack.Navigator>
      <AssetsMessageStack.Screen
        name="Pact"
        component={Pact}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.8, 'white'),
          header: () => null,
        }}></AssetsMessageStack.Screen>
      <AssetsMessageStack.Screen
        name="Community"
        component={Community}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.8, 'white'),
          header: () => null,
        }}></AssetsMessageStack.Screen>
      <AssetsMessageStack.Screen
        name="Timeout"
        component={Timeout}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.8, 'white'),
          header: () => null,
        }}></AssetsMessageStack.Screen>
    </AssetsMessageStack.Navigator>
  );
}
