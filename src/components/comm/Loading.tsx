import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {LoadingStyle as styles, widthScale} from '@/style';
import {LoadingProps} from '@/types';

export default function Loading({
  style,
  loadingStyle,
  size,
  show = true,
}: LoadingProps) {
  return show ? (
    <View style={[styles.view, style]}>
      <ActivityIndicator
        size={(size || 30) * widthScale}
        style={[styles.anima, loadingStyle]}
        color="white"></ActivityIndicator>
      <Text style={styles.text}>加载中...</Text>
    </View>
  ) : null;
}
