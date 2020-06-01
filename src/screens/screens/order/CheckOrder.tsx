import React from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {OrderStackList} from '@/types';
import CheckOrderTopArea from '@/components/order/CheckOrderTopArea';
import CheckOrderBottomButton from '@/components/order/CheckOrderBottomButton';

export default function CheckOrder() {
  const params = useRoute<RouteProp<OrderStackList, 'CheckOrder'>>().params;
  console.log(params);

  return (
    <View>
      <CheckOrderTopArea
        description={params.description}
        price={params.price}
        imgPath={params.imgPath}
      />
      <CheckOrderBottomButton price={params.price} />
    </View>
  );
}
