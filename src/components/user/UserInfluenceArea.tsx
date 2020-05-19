import React from 'react';
import {View, Text} from 'react-native';
import {UserInfluenceAreaStyles as styles} from '@/style';
import {getRandomNumber} from '@/tools';

export default function UserInfluence() {
  const data = [
    {title: '收藏', number: getRandomNumber(0, 40)},
    {title: '历史浏览', number: getRandomNumber(0, 3000)},
    {title: '关注', number: getRandomNumber(0, 200)},
    {title: '粉丝', number: getRandomNumber(0, 300)},
  ];
  const Boxs = data.map((v, index) => {
    return (
      <View key={index} style={styles.box}>
        <Text style={styles.num}>{v.number}</Text>
        <Text style={styles.title}>{v.title}</Text>
      </View>
    );
  });
  return <View style={styles.influence}>{Boxs}</View>;
}
