import React from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {MainStackList} from '@/types';

export default function Detail() {
  const route = useRoute<RouteProp<MainStackList, 'Detail'>>();
  return (
    <View>
      <Text>i am {route.params.commodityId}</Text>
    </View>
  );
}
