import React from 'react';
import {View, Text, Image} from 'react-native';
import {RecordListProps} from '@/types';
import {RecordListStyles as styles} from '@/style';

export default function RecordList({data, me, you}: RecordListProps) {
  const isMe = data.send === me.userId;
  const user = isMe ? me : you;
  return (
    <View style={styles.area}>
      {data.createTime ? (
        <Text style={styles.time}>{getTime(data.createTime)}</Text>
      ) : null}
      <View style={[styles.user, isMe ? styles.me : styles.you]}>
        <View style={styles.tail}>
          <View style={styles.tailTop}></View>
          <View style={styles.tailBottom}></View>
        </View>
        <Image
          source={{uri: user.headImg}}
          style={[styles.img, isMe ? styles.meImg : styles.youImg]}></Image>
        <View style={[styles.msg, isMe ? styles.meMsg : styles.youMsg]}>
          <Text style={styles.text} selectable={true}>
            {data.msg || ' '}
          </Text>
        </View>
      </View>
    </View>
  );
}

function getTime(time: string) {
  const date = new Date(time);
  return `${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
}
