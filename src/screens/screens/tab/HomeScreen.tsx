import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SearchInput from '@/components/comm/SearchInput';
import {HomeScreenStyles as styles} from '@/style';
import {useNavigation} from '@react-navigation/native';
import HomeSwiper from '@/components/home/HomeSwiper';
import KindArea from '@/components/home/KindArea';
import RefreshList from '@/components/comm/RefreshList';
import {axios} from '@/api';
import {RecommendGetResponse} from '@/types';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [recommend, setRecommend] = useState<RecommendGetResponse['data']>();
  const [isRefresh, setIsRefresh] = useState(false);
  const getRecommendList = () => {
    setIsRefresh(true);
    setTimeout(() => {
      axios.get<RecommendGetResponse>('/commodity/recommend').then((res) => {
        setRecommend(res.data.data);
        setTimeout(() => {
          setIsRefresh(false);
        }, 0);
      });
    }, 0);
  };
  useEffect(() => {
    getRecommendList();
  }, []);

  return (
    <View>
      <View style={styles.top}>
        <SearchInput
          placeholder="请输入关键词"
          iconSize={18}
          onPress={() => {
            navigation.navigate('Search');
          }}
          editable={false}></SearchInput>
      </View>
      <HomeSwiper></HomeSwiper>
      <KindArea></KindArea>
      <RefreshList
        isRefresh={isRefresh}
        data={recommend}
        onRefresh={() => {
          getRecommendList();
        }}></RefreshList>
    </View>
  );
}
