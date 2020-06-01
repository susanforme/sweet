import React from 'react';
import {View, Text, Button} from 'react-native';
import {checkOrderBottomButtonProps} from '@/types';

export default function CheckOrderBottomButton({
  price,
}: checkOrderBottomButtonProps) {
  return (
    <View>
      <Text>
        合计: <Text>{price.toFixed(2)}</Text>
      </Text>
      <Button title="立即付款" onPress={() => {}}></Button>
    </View>
  );
}
