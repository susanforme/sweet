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
  const data = ['官方公告', '交易信息', '互动信息', '指南教程'];
  return data.map((v, index) => {
    //把require 放在数组里面
    let img = <Image source={require('@/resource/message/notice.png')}></Image>;
    switch (index) {
      case 0:
        img = (
          <Image
            source={require('@/resource/message/notice.png')}
            style={styles.img}></Image>
        );
        break;
      case 1:
        img = (
          <Image
            source={require('@/resource/message/deal.png')}
            style={styles.img}></Image>
        );
        break;
      case 2:
        img = (
          <Image
            source={require('@/resource/message/message.png')}
            style={styles.img}></Image>
        );
        break;
      case 3:
        img = (
          <Image
            source={require('@/resource/message/pug.png')}
            style={styles.img}></Image>
        );
        break;
    }
    return (
      <TouchableNativeFeedback key={index}>
        <View style={styles.box}>
          {img}
          <Text style={styles.boxText}>{v}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  });
}
