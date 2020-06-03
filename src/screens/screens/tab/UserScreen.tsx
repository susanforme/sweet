import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
} from 'react-native';
import {MyAppState, UserScreenProps, ProfileUserResponse} from '@/types';
import {connect} from 'react-redux';
import UserTopArea from '@/components/user/UserTopArea';
import UserInfluenceArea from '@/components/user/UserInfluenceArea';
import UserFeatureArea from '@/components/user/UserFeatureArea';
import {widthScale} from '@/style';
import {axios} from '@/api';
import {getRandomNumber} from '@/tools';
import {useNavigation} from '@react-navigation/native';
import {UserScreenStyles as styles} from '@/style';
import UserHeader from '@/components/user/UserHeader';

function UserScreen({isLogin, user}: UserScreenProps) {
  const {userName, _id, headImg} = user;
  const navigation = useNavigation();
  const [data, setData] = useState<ProfileUserResponse['data']>({
    buyCount: 0,
    sellCount: 0,
    totalCount: 0,
  });
  let isDefault = false;
  if (!isLogin) {
    isDefault = true;
  }
  useEffect(() => {
    if (isLogin) {
      axios
        .get<ProfileUserResponse>(`/user/profile/${user._id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch(() => {});
    }
  }, []);
  const sellData = [
    {
      title: '我发布的',
      count: data.totalCount,
      img: 'balance-list.png',
    },
    {
      title: '我卖出的',
      count: data.sellCount,
      img: 'gold-coin.png',
      style: {marginRight: 120 * widthScale},
      onPress: () => {
        navigation.navigate('Order', {
          title: '出售订单',
          screen: 'OrderScreen',
          params: {
            isBuy: false,
          },
        });
      },
    },
  ];
  const buyData = [
    {
      title: '我买到的',
      count: data.buyCount,
      img: 'bag.png',
      onPress: () => {
        navigation.navigate('Order', {
          title: '购买订单',
          screen: 'OrderScreen',
          params: {
            isBuy: true,
          },
        });
      },
    },
    {
      title: '我租到的',
      count: getRandomNumber(0, 10),
      img: 'rent.png',
      style: {marginRight: 120 * widthScale},
    },
  ];
  const playData = [
    ...Array(3).fill({
      title: '我卖出的',
      count: getRandomNumber(0, 10),
      img: 'bag.png',
    }),
    ...Array(4).fill({
      title: '我卖出的',
      count: getRandomNumber(0, 10),
      img: 'gold-coin.png',
    }),
  ];
  const otherData = [
    ...Array(2).fill({
      title: '我卖出的',
      count: getRandomNumber(0, 10),
      img: 'gold-coin.png',
    }),
    ...Array(6).fill({
      title: '我租到的',
      count: getRandomNumber(0, 10),
      img: 'rent.png',
    }),
  ];
  const noLogin = (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <View style={styles.area}>
        <View style={[styles.noResult]}>
          <Image
            source={require('@/resource/noResult.jpg')}
            style={styles.noResultImg}></Image>
          <Text style={styles.noResultText1}>点击屏幕,开始登录</Text>
          <Text style={styles.noResultText2}>好像没登录哦~点击登录</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={{flex: 1}}>
      <UserHeader backgroundColor={isLogin ? '#ffee11' : 'white'}></UserHeader>
      <ScrollView>
        {isLogin ? (
          <>
            <UserTopArea
              userName={userName}
              _id={_id}
              headImg={headImg}
              isDefault={isDefault}></UserTopArea>
            <UserInfluenceArea></UserInfluenceArea>
            <UserFeatureArea
              title="卖在甜虾"
              style={{
                marginTop: -15 * widthScale,
              }}
              data={sellData}></UserFeatureArea>
            <UserFeatureArea title="买在甜虾" data={buyData}></UserFeatureArea>
            <UserFeatureArea title="玩在甜虾" data={playData}></UserFeatureArea>
            <UserFeatureArea
              title="其他工具"
              data={otherData}
              style={{
                marginBottom: 15 * widthScale,
              }}></UserFeatureArea>
          </>
        ) : (
          noLogin
        )}
      </ScrollView>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
  user: state.user,
});

export default connect(stateToProps)(UserScreen);
