import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {MyAppState, UserScreenProps, ProfileUserResponse} from '@/types';
import {connect} from 'react-redux';
import UserTopArea from '@/components/user/UserTopArea';
import UserInfluenceArea from '@/components/user/UserInfluenceArea';
import UserFeatureArea from '@/components/user/UserFeatureArea';
import {widthScale} from '@/style';
import {axios} from '@/api';
import {getRandomNumber} from '@/tools';

function UserScreen({isLogin, user}: UserScreenProps) {
  const {userName, _id, headImg} = user;
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
        .catch(() => {
          console.log('用户页面网络错误');
        });
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
    },
  ];
  const buyData = [
    {
      title: '我买到的',
      count: data.buyCount,
      img: 'bag.png',
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
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
  user: state.user,
});

export default connect(stateToProps)(UserScreen);
