import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'beeshell/dist/components/Button';
import {CommentStyles as styles} from '@/style';
import {CommentProps} from '@/types';

export default function Comment({comment}: CommentProps) {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentTitle}>全部留言</Text>
      {comment?.length === 0 ? (
        <View style={styles.noComment}>
          <Image
            source={require('@/resource/comment.jpg')}
            style={styles.commentImg}></Image>
          <Text style={styles.commentTip}>还没有人留言,还不快来抢沙发...</Text>
          <Button style={styles.commentBtnStyle}>留言</Button>
        </View>
      ) : null}
    </View>
  );
}
