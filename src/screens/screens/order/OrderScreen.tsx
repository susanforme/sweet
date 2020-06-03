import React from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {OrderStackList} from '@/types';

//传递参数来确认是买家还是卖家
export default function OrderScreen() {
  const params = useRoute<RouteProp<OrderStackList, 'OrderScreen'>>().params;
  console.log(params.isBuy);

  return (
    <View>
      <Text>123</Text>
    </View>
  );
}
