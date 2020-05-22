import React from 'react';
import {View, Text, Image} from 'react-native';
import {BlackListScreenStyles as styles} from '@/style';

export default function BlackListScreen() {
  return (
    <View style={styles.area}>
      <Image
        source={require('@/resource/noResult.jpg')}
        style={styles.img}></Image>
      <Text style={styles.text}>什么都没有哦~~</Text>
    </View>
  );
}
