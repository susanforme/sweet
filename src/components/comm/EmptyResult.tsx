import React from 'react';
import {View, Text, Image} from 'react-native';
import {OperateBoxsStyles as styles} from '@/style';

export default function EmptyResult() {
  return (
    <View style={styles.empty}>
      <Image
        source={require('@/resource/empty-image-default.png')}
        style={styles.emptyImg}
      />
      <Text style={styles.emptyText}>没有结果哦~</Text>
    </View>
  );
}
