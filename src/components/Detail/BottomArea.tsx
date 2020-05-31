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
import {useNavigation} from '@react-navigation/native';
import {DetailBottomAreaProps, MyAppState} from '@/types';
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
  const navigation = useNavigation();
  const inputRef = useRef<TextInput>(null);
  const show = (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          if (myUserMsg._id === user?._id) {
            return Tip.show('不能和自己聊天', 500);
          }
          if (!isLogin) {
            return Tip.show('未登录', 500);
          }
          navigation.navigate('Chat', {
            userId: user?._id || '',
            userName: user?.userName || '',
            headImg: user?.headImg || '',
          });
        }}>
        <View style={styles.icon}>
          <FontIcon
            name="chat"
            size={22 * widthScale}
            color="gray"
            style={styles.iconFont}></FontIcon>
          <Text style={styles.text}>聊天</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          toEnd();
          if (!isLogin) {
            return Tip.show('未登录', 500);
          }
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
            name="hearto"
            size={22 * widthScale}
            color="gray"
            style={styles.iconFont}></Icon>
          <Text style={styles.text}>想要</Text>
        </View>
      </TouchableWithoutFeedback>
      <Button
        style={styles.right}
        onPress={() => {
          if (data?.isSale) {
            return Tip.show('该商品已经卖出', 500);
          }
          if (myUserMsg._id === user?._id) {
            return Tip.show('不能购买自己正在卖出的物品', 500);
          }
          if (!isLogin) {
            return Tip.show('未登录', 500);
          }
          navigation.navigate('Order', {
            title: '确认订单',
            screen: 'CheckOrder',
            params: {
              id: commodityId || '',
              owner: user?._id || '',
              imgPath: data?.imgPath[0] || '',
              price: data?.price || 0,
              description: data?.description || '',
              isSale: data?.isSale || false,
            },
          });
        }}>
        购买
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
