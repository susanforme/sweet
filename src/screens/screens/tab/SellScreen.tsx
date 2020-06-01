import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableNativeFeedback} from 'react-native';
import SearchInput from '@/components/comm/SearchInput';
import {
  HomeScreenStyles as styles,
  SellScreenStyles as myStyles,
  widthScale,
} from '@/style';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import RefreshList from '@/components/comm/RefreshList';
import {axios} from '@/api';
import {RecommendGetResponse, MainStackList, MyAppState} from '@/types';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

function SellScreen({isLogin}: {isLogin: boolean}) {
  const [recommend, setRecommend] = useState<RecommendGetResponse['data']>();
  const [isRefresh, setIsRefresh] = useState(false);
  const navigation = useNavigation<NavigationProp<MainStackList, 'Tab'>>();
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
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <RefreshList
        isRefresh={isRefresh}
        data={recommend}
        ListHeaderComponent={
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
            <View style={styles.bottom}></View>
          </View>
        }
        onRefresh={() => {
          getRecommendList();
        }}></RefreshList>
      <View style={myStyles.border}>
        <TouchableNativeFeedback
          style={{overflow: 'hidden'}}
          onPress={() => {
            if (!isLogin) {
              return navigation.navigate('Login');
            }
            navigation.navigate('Release');
          }}>
          <View style={myStyles.btn}>
            <Icon name="plus" size={30 * widthScale} color="white"></Icon>
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
});

export default connect(stateToProps)(SellScreen);
