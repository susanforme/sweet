import React from 'react';
import {View, ScrollView} from 'react-native';
import SearchInput from '@/components/comm/SearchInput';
import {HomeScreenStyles as styles} from '@/style';
import {useNavigation} from '@react-navigation/native';
import HomeSwiper from '@/components/home/HomeSwiper';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
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
    </ScrollView>
  );
}
