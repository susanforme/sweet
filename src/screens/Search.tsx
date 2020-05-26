import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '@/components/search/Header';
import {SearchStyles as styles} from '@/style';
import RefreshList from '@/components/comm/RefreshList';
import {axios} from '@/api';
import {RecommendGetResponse} from '@/types';
import {Tip} from 'beeshell/dist/components/Tip';

export default function Search() {
  const [data, setData] = useState<RecommendGetResponse['data']>();
  const [isSearching, setIsSearching] = useState(true);

  return (
    <SafeAreaView style={styles.area}>
      <Header
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        search={(content) => {
          if (!content) {
            setIsSearching(true);
            return Tip.show('请输入查询关键字', 500);
          }
          axios
            .get<RecommendGetResponse>(`/commodity/search/${content}`)
            .then((res) => {
              if (res.data.data.length === 0) {
                setIsSearching(true);
                return Tip.show('查询结果为空', 500);
              }
              setData(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}></Header>
      {isSearching ? null : (
        <RefreshList
          data={data}
          enabelRefresh={false}
          ListHeaderComponent={
            <View style={styles.marginTop}></View>
          }></RefreshList>
      )}
    </SafeAreaView>
  );
}
