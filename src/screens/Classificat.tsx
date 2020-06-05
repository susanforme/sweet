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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get<getClassificationResponse>(`/commodity/classification/${kindId}`)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <RefreshList
      data={data}
      isLoading={isLoading}
      ListHeaderComponent={
        <View style={{marginTop: 10 * widthScale}}></View>
      }></RefreshList>
  );
}
