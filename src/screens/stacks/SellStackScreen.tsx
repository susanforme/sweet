import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SellScreen from '@/screens/screens/tab/SellScreen';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';

const SellStack = createStackNavigator<StackList>();

export default function SellStackScreen() {
  const height = useHeaderHeight();

  return (
    <SellStack.Navigator>
      <SellStack.Screen
        name="Sell"
        component={SellScreen}
        options={{
          ...getDefaultHeaderStyle(height, 1),
          headerTitle: '闲置专区',
        }}></SellStack.Screen>
    </SellStack.Navigator>
  );
}

type StackList = {
  Sell: undefined;
};
