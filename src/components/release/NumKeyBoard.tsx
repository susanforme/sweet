import React from 'react';
import {View, Text} from 'react-native';
import {NumKeyboardStyles as styles} from '@/style';
import {NumKeyboardProps} from '@/types';

export default function NumKeyBoard({price, setPrice}: NumKeyboardProps) {
  return (
    <View style={styles.area}>
      <View style={styles.showPrice}>
        <Text style={styles.tip}>价格</Text>
        {price ? (
          <Text style={styles.result}>{price}</Text>
        ) : (
          <Text style={styles.placeholder}>¥ 0.00</Text>
        )}
      </View>
    </View>
  );
}
