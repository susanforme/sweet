import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import {
  MyAppState,
  MessageScreenProps,
  MainStackList,
  GetMsgListData,
} from '@/types';
import {MessageScreenStyles as styles, widthScale} from '@/style';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import TopArea from '@/components/message/TopArea';
import Loading from '@/components/comm/Loading';
import {axios} from '@/api';
import {Tip} from 'beeshell/dist/components/Tip';

function MessageScreen({isLogin, user, forceRefresh}: MessageScreenProps) {
  const navigation = useNavigation<NavigationProp<MainStackList>>();
  const [isLoading, setIsLoading] = useState(false);
  const [msgList, setMsgList] = useState<GetMsgListData['data']>();
  useEffect(() => {
    if (isLogin) {
      setIsLoading(true);
      axios
        .get<GetMsgListData>(`/chat/msglist/${user._id}`)
        .then((res) => {
          setMsgList(res.data.data);
          setTimeout(() => {
            setIsLoading(false);
          }, 0);
        })
        .catch(() => {
          setIsLoading(false);
          return Tip.show('网络错误', 500);
        });
    }
  }, [isLogin, forceRefresh]);
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
  const msgLists = msgList?.map((v) => {
    return (
      v && (
        <TouchableNativeFeedback
          key={v?._id}
          onPress={() => {
            navigation.navigate('Chat', {
              userId: v._id,
              headImg: v?.headImg,
              userName: v?.userName,
            });
          }}>
          <View style={styles.singleMsg}>
            <View style={styles.msglist}>
              <Image source={{uri: v?.headImg}} style={styles.headImg}></Image>
              <View style={styles.right}>
                <Text style={styles.username}>{v?.userName}</Text>
                <Text style={styles.tip}>你有一条消息</Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      )
    );
  });

  const area = <View style={{marginTop: 20 * widthScale}}>{msgLists}</View>;
  return (
    <View style={{flex: 1}}>
      <Loading show={isLoading} title="同步中..."></Loading>
      {isLogin ? <TopArea /> : null}
      <ScrollView
        style={[
          styles.area,
          {backgroundColor: !isLogin ? 'white' : '#f2f2f2'},
        ]}>
        {isLogin ? area : noLogin}
      </ScrollView>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
  isLogin: state.isLogin,
  forceRefresh: state.forceRefresh,
});

export default connect(stateToProps)(MessageScreen);
