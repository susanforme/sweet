import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'beeshell/dist/components/Button';
import {CommentStyles as styles} from '@/style';
import {CommentProps} from '@/types';

export default function Comment({comment, setIsInput}: CommentProps) {
  const noComment = (
    <View style={styles.noComment}>
      <Image
        source={require('@/resource/comment.jpg')}
        style={styles.commentImg}></Image>
      <Text style={styles.commentTip}>还没有人留言,还不快来抢沙发...</Text>
      <Button
        style={styles.commentBtnStyle}
        onPress={() => {
          setIsInput(true);
        }}>
        留言
      </Button>
    </View>
  );

  const comments = comment?.map((v) => {
    return (
      <View style={styles.commentBox}>
        <Image
          source={{uri: v.userId.headImg}}
          style={styles.commentImage}></Image>
        <View style={styles.commentRight}>
          <Text style={styles.commentUsername}>{v.userId.userName}</Text>
          <Text style={styles.commentContent}>{v.comment}</Text>
          <Text style={styles.commentTime}>{v.createTime}</Text>
        </View>
      </View>
    );
  });
  return (
    <View style={styles.comment}>
      <Text style={styles.commentTitle}>
        全部留言{comment?.length === 0 ? '' : ` · ${comment?.length}`}
      </Text>
      {comment?.length === 0 ? noComment : comments}
    </View>
  );
}
