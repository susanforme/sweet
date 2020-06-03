import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {UserFeatureAreaProps} from '@/types';
import {UserFeatureAreaStyles as styles} from '@/style';

export default function UserFeatureArea({
  data,
  title,
  style,
}: UserFeatureAreaProps) {
  const website =
    'https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/img/mobile/user/';
  const Boxs = data.map((v, index) => {
    return (
      <TouchableNativeFeedback key={index} onPress={v.onPress}>
        <View style={[styles.box, v.style]}>
          <Image
            style={styles.img}
            source={{
              uri: website + v.img,
            }}></Image>
          <Text style={styles.count}>
            {v.title} {v.count}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  });
  return (
    <View style={[styles.area, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{Boxs}</View>
    </View>
  );
}
