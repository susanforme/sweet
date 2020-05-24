import React, {useEffect, useState} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {MainStackList, getClassificationResponse} from '@/types';
import {axios} from '@/api';
import RefreshList from '@/components/comm/RefreshList';
import {View} from 'react-native';
import {widthScale} from '@/style';

export default function Classficat() {
  const route = useRoute<RouteProp<MainStackList, 'Classificat'>>();
  const kindId = route.params.kindId;
  const [data, setData] = useState<getClassificationResponse['data']>();
  useEffect(() => {
    axios
      .get<getClassificationResponse>(`/commodity/classification/${kindId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {});
  }, []);
  return (
    <RefreshList
      data={data}
      ListHeaderComponent={
        <View style={{marginTop: 10 * widthScale}}></View>
      }></RefreshList>
  );
}
