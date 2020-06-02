import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import SearchInput from '@/components/comm/SearchInput';
import {HomeScreenStyles as styles, widthScale} from '@/style';
import {useNavigation} from '@react-navigation/native';
import HomeSwiper from '@/components/home/HomeSwiper';
import KindArea from '@/components/home/KindArea';
import RefreshList from '@/components/comm/RefreshList';
import {axios} from '@/api';
import {RecommendGetResponse, MyAppState} from '@/types';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

function HomeScreen({forceRefresh}: HomeScreenProps) {
  const navigation = useNavigation();
  const [recommend, setRecommend] = useState<RecommendGetResponse['data']>();
  const [isRefresh, setIsRefresh] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const [isToTop, setIsToTop] = useState(false);
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
    axios.get<RecommendGetResponse>('/commodity/recommend').then((res) => {
      setRecommend(res.data.data);
    });
  }, [forceRefresh]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <RefreshList
        isRefresh={isRefresh}
        data={recommend}
        isToTop={isToTop}
        ListHeaderComponent={
          <View style={{backgroundColor: 'white'}}>
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
            <View style={{marginBottom: 10 * widthScale}}></View>
            <View style={styles.bottom}></View>
          </View>
        }
        onScroll={(e) => {
          const height = e.nativeEvent.contentSize.height;
          if (e.nativeEvent.contentOffset.y < height / 2) {
            return setShowGoTop(false);
          }
          setShowGoTop(true);
        }}
        onRefresh={() => {
          getRecommendList();
        }}></RefreshList>
      {showGoTop ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setIsToTop(true);
            setTimeout(() => {
              setIsToTop(false);
            }, 0);
          }}>
          <View style={styles.goTop}>
            <Icon
              name="arrowup"
              size={25 * widthScale}
              style={styles.goTopText}></Icon>
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </SafeAreaView>
  );
}

const stateToProps = (state: MyAppState) => ({
  forceRefresh: state.forceRefresh,
});

export default connect(stateToProps)(HomeScreen);

type HomeScreenProps = {forceRefresh: boolean};
