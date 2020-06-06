import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  Linking,
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

function UserScreen({isLogin, user, forceRefresh}: UserScreenProps) {
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
  }, [forceRefresh]);
  const sellData = [
    {
      title: '我发布的',
      count: data.totalCount,
      img: 'balance-list.png',
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
    {
      title: '客服',
      img: 'service.png',
      onPress: () => {
        Linking.openURL('https://www.wdf5.com');
      },
    },
    {
      title: '条款',
      img: 'law.png',
      onPress: () => {
        Linking.openURL('https://www.wdf5.com');
      },
    },
    {
      title: '音视频公约',
      img: 'pact.png',
      onPress: () => {
        navigation.navigate('AssetsMessage', {
          screen: 'Pact',
          title: '关于甜虾社区音视频类商品的管控通知',
        });
      },
    },
    {
      title: '社区规定',
      img: 'community.png',
      onPress: () => {
        navigation.navigate('AssetsMessage', {
          screen: 'Community',
          title: '甜虾社区信息发布规范',
        });
      },
    },
    {
      title: '超时规定',
      img: 'timeout.png',
      style: {marginTop: 20 * widthScale},
      onPress: () => {
        navigation.navigate('AssetsMessage', {
          screen: 'Timeout',
          title: '甜虾交易超时说明',
        });
      },
    },
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
            <UserFeatureArea title="其他工具" data={playData}></UserFeatureArea>
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
  forceRefresh: state.forceRefresh,
});

export default connect(stateToProps)(UserScreen);
