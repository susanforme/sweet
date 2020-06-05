import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useHeaderHeight} from '@react-navigation/stack';
import {getDefaultHeaderStyle} from '@/style/header';
import {StatusBar} from 'react-native';
import CheckOrder from '@/screens/screens/order/CheckOrder';
import OrderScreen from '@/screens/screens/order/OrderScreen';
import {OrderStackList} from '@/types';

const OrderStack = createStackNavigator<OrderStackList>();

export default function OrderStackScreen() {
  const paddingTop = StatusBar.currentHeight || 30;
  const height = useHeaderHeight();
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="CheckOrder"
        component={CheckOrder}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.6),
          header: () => null,
        }}></OrderStack.Screen>
      <OrderStack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          ...getDefaultHeaderStyle(height, paddingTop, 0.6),
          header: () => null,
        }}></OrderStack.Screen>
    </OrderStack.Navigator>
  );
}
