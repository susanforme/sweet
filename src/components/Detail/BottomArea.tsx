import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from 'react-native';
import {DetailBottomAreaStyles as styles, widthScale} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainStackList, DetailBottomAreaProps, MyAppState} from '@/types';
import FontIcon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {Tip} from 'beeshell/dist/components/Tip';
import {axios} from '@/api';

function BottomArea({
  toEnd,
  myUserMsg,
  commodityId,
  isLogin,
  isInput,
  setIsInput,
  data,
  setData,
  user,
}: DetailBottomAreaProps) {
  const [comment, setComment] = useState('');
  const navigation = useNavigation<NavigationProp<MainStackList>>();
  const inputRef = useRef<TextInput>(null);
  const show = (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.icon}>
          <Icon
            name="hearto"
            size={22 * widthScale}
            color="gray"
            style={styles.iconFont}></Icon>
          <Text style={styles.text}>喜欢</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          toEnd();
          setTimeout(() => {
            setIsInput(true);
          }, 0);
        }}>
        <View style={styles.icon}>
          <Icon
            name="message1"
            size={22 * widthScale}
            color="gray"
            style={styles.iconFont}></Icon>
          <Text style={styles.text}>留言</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.icon}>
          <Icon
            name="shoppingcart"
            size={22 * widthScale}
            color="gray"
            style={styles.iconFont}></Icon>
          <Text style={styles.text}>购买</Text>
        </View>
      </TouchableWithoutFeedback>
      <Button
        style={styles.right}
        onPress={() => {
          navigation.navigate('Chat', {
            userId: user?._id || '',
            userName: user?.userName || '',
            headImg: user?.headImg || '',
          });
        }}>
        我想要
      </Button>
    </>
  );
  const input = (
    <View style={styles.inputArea}>
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef.current?.blur();
        }}>
        <View style={styles.inputIcon}>
          <FontIcon
            name="keyboard-hide"
            size={25 * widthScale}
            color="rgba(128, 128, 128, 0.75)"></FontIcon>
        </View>
      </TouchableWithoutFeedback>
      <Image
        source={{uri: myUserMsg.headImg}}
        style={styles.inputHeadImg}></Image>
      <TextInput
        style={styles.input}
        ref={inputRef}
        autoFocus
        value={comment}
        onBlur={() => {
          setIsInput(false);
        }}
        placeholder="看对眼就留言问问更多细节"
        onSubmitEditing={() => {
          sendComment(
            isLogin,
            commodityId as string,
            comment,
            data,
            setData,
            myUserMsg,
          );
        }}
        returnKeyType="send"
        onChangeText={(text) => {
          setComment(text);
        }}></TextInput>
      <Button
        style={styles.button}
        onPress={() => {
          inputRef.current?.blur();
          sendComment(
            isLogin,
            commodityId as string,
            comment,
            data,
            setData,
            myUserMsg,
          );
        }}>
        发送
      </Button>
    </View>
  );
  return <View style={styles.area}>{isInput ? input : show}</View>;
}

const stateToProps = (state: MyAppState) => ({
  myUserMsg: state.user,
  isLogin: state.isLogin,
});

export default connect(stateToProps)(BottomArea);

function sendComment(
  isLogin: boolean,
  commodityId: string,
  comment: string,
  data: DetailBottomAreaProps['data'],
  setData: DetailBottomAreaProps['setData'],
  myUserMsg: DetailBottomAreaProps['myUserMsg'],
) {
  if (!isLogin) {
    return Tip.show('请登录后再试', 500);
  }
  if (!comment) {
    return Tip.show('请输入文字内容', 500);
  }
  axios
    .post('/commodity/comment', {
      comment,
      commodityId,
      userId: myUserMsg._id,
    })
    .then(() => {
      Tip.show('发送成功', 500);
      if (!data) {
        return Tip.show('发送失败', 500);
      }
      setData({
        ...data,
        comment: [
          ...data.comment,
          {
            createTime: new Date().toLocaleString(),
            userId: {
              headImg: myUserMsg.headImg,
              userName: myUserMsg.userName,
              _id: myUserMsg._id,
            },
            comment,
          },
        ],
      });
    })
    .catch(() => {
      Tip.show('发送失败', 500);
    });
}
