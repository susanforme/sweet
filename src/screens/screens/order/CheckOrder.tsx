import React from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {OrderStackList} from '@/types';

export default function CheckOrder() {
  const params = useRoute<RouteProp<OrderStackList, 'CheckOrder'>>().params;
  console.log(params);

  return (
    <View>
      <Text>123</Text>
    </View>
  );
}
