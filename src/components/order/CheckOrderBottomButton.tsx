import React from 'react';
import {View, Text} from 'react-native';
import {checkOrderBottomButtonProps} from '@/types';
import {CheckOrderBottomButtonStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';

export default function CheckOrderBottomButton({
  price,
  onPress,
}: checkOrderBottomButtonProps) {
  return (
    <View style={styles.area}>
      <Text style={styles.text}>
        合计: <Text style={styles.price}>¥ {price.toFixed(2)}</Text>
      </Text>
      <Button style={styles.btn} onPress={onPress}>
        立即付款
      </Button>
    </View>
  );
}
