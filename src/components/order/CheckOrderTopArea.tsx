import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {checkOrderTopAreaProps} from '@/types';
import {checkOrderTopAreaStyles as styles} from '@/style';

export default function CheckOrderTopArea({
  description,
  imgPath,
  price,
}: checkOrderTopAreaProps) {
  return (
    <TouchableNativeFeedback>
      <View style={styles.area}>
        <Image source={{uri: imgPath}} style={styles.img} />
        <View style={styles.rgiht}>
          <Text numberOfLines={2} style={styles.des}>
            {description}
          </Text>
          <Text style={styles.bottom}>¥ {price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
