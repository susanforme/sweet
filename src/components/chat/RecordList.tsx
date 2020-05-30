import React from 'react';
import {View, Text, Image, Clipboard} from 'react-native';
import {RecordListProps} from '@/types';
import {RecordListStyles as styles} from '@/style';
import {Tip} from 'beeshell/dist/components/Tip';

export default function RecordList({data, me, you}: RecordListProps) {
  const isMe = data.send === me.userId;
  const user = isMe ? me : you;
  return (
    <View style={styles.area}>
      {data.createTime ? (
        <Text
          style={styles.time}
          selectable={true}
          selectionColor="gray"
          onLongPress={() => {
            Clipboard.setString(data.msg);
            Tip.show('复制成功', 300);
          }}>
          {getTime(data.createTime)}
        </Text>
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
          <Text style={styles.text}>{data.msg || ' '}</Text>
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
