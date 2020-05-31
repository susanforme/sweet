import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {MessageTopAreaStyles as styles} from '@/style';

export default function TopArea() {
  const data = getData();
  return (
    <View>
      <View style={styles.topBackground}></View>
      <View style={styles.boxArea}>{data}</View>
    </View>
  );
}

function getData() {
  const data = [
    {title: '官方公告', img: require('@/resource/message/notice.png')},
    {title: '交易信息', img: require('@/resource/message/deal.png')},
    {title: '互动信息', img: require('@/resource/message/message.png')},
    {title: '指南教程', img: require('@/resource/message/pug.png')},
  ];
  return data.map((v, index) => {
    return (
      <TouchableNativeFeedback key={index}>
        <View style={styles.box}>
          <Image source={v.img} style={styles.img}></Image>
          <Text style={styles.boxText}>{v.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  });
}
