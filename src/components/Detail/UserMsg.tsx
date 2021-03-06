import React from 'react';
import {TouchableNativeFeedback, View, Text, Image} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainStackList, UserMsgProps, MyAppState} from '@/types';
import {UserMsgStyles as styles, widthScale} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {getRandomNumber} from '@/tools';
import {connect} from 'react-redux';
import {Tip} from 'beeshell/dist/components/Tip';

function UserMsg({user, myUserMsg}: UserMsgProps) {
  const navigation = useNavigation<NavigationProp<MainStackList>>();
  return (
    <TouchableNativeFeedback
      onPress={() => {
        if (myUserMsg._id === user?._id) {
          return Tip.show('不能和自己聊天', 500);
        }
        navigation.navigate('Chat', {
          userId: user?._id || '',
          userName: user?.userName || '',
          headImg: user?.headImg || '',
        });
      }}>
      <View style={styles.userMsg}>
        <View style={styles.userMsgLeft}>
          <Text style={styles.userMsgUsername}>{user?.userName}</Text>
          <Text style={styles.userMsgDescription} numberOfLines={2}>
            来甜虾已经
            {getToday(user?.createTime || 1)}
            天了,卖出过{getRandomNumber(0, 10)}件宝贝.
          </Text>
          <View style={styles.userMsgBottom}>
            <Text style={styles.userMsgTip}>
              <Icon
                name="smileo"
                size={16 * widthScale}
                color="rgb(71, 162, 204)"></Icon>{' '}
              实人认证已通过{' '}
            </Text>
            <Text style={styles.userMsgTip}>
              <Icon
                name="aliwangwang-o1"
                size={16 * widthScale}
                color="rgb(71, 162, 204)"></Icon>{' '}
              芝麻信用已经授权
            </Text>
          </View>
        </View>
        <Image
          source={{uri: user?.headImg}}
          style={[styles.userMsgRight]}></Image>
      </View>
    </TouchableNativeFeedback>
  );
}

const stateToProps = (state: MyAppState) => ({
  myUserMsg: state.user,
  isLogin: state.isLogin,
});

export default connect(stateToProps)(UserMsg);

function getToday(time: string | number) {
  return Math.ceil(
    (new Date().getTime() - new Date(time).getTime()) / (8.64 * 10 ** 7),
  );
}
