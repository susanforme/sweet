import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SellScreen from '@/screens/screens/tab/SellScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';
import {StatusBar} from 'react-native';

const SellStack = createStackNavigator<StackList>();

export default function SellStackScreen() {
  const height = useHeaderHeight();
  const paddingTop = StatusBar.currentHeight || 30;

  return (
    <SellStack.Navigator>
      <SellStack.Screen
        name="Sell"
        component={SellScreen}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.7),
          headerTitle: '闲置专区',
        }}></SellStack.Screen>
    </SellStack.Navigator>
  );
}

type StackList = {
  Sell: undefined;
};
