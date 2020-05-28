import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {MyAppState, MessageScreenProps, MainStackList} from '@/types';
import {MessageScreenStyles as styles} from '@/style';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import TopArea from '@/components/message/TopArea';

function MessageScreen({isLogin, user}: MessageScreenProps) {
  const navigation = useNavigation<NavigationProp<MainStackList>>();
  const noLogin = (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <View style={styles.noResult}>
        <Image
          source={require('@/resource/noResult.jpg')}
          style={styles.noResultImg}></Image>
        <Text style={styles.noResultText1}>点击屏幕,开始登录</Text>
        <Text style={styles.noResultText2}>好像没登录哦~点击登录</Text>
      </View>
    </TouchableWithoutFeedback>
  );
  const area = (
    <>
      <TopArea></TopArea>
    </>
  );
  return (
    <ScrollView
      style={[styles.area, {backgroundColor: !isLogin ? 'white' : '#f2f2f2'}]}>
      {isLogin ? area : noLogin}
    </ScrollView>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
  isLogin: state.isLogin,
});

export default connect(stateToProps)(MessageScreen);
