import React from 'react';
import {ScrollView, View} from 'react-native';
import {AllGoodsProps} from '@/types';
import OperateBoxs from '@/components/comm/OperateBoxs';
import {OperateBoxsStyles as styles} from '@/style';
import Loading from '@/components/comm/Loading';
import EmptyResult from '@/components/comm/EmptyResult';

export default function DeliveryGoods({
  tabLabel,
  data,
  isBuy,
  status,
  isLoaidng,
  setIsLoading,
}: AllGoodsProps) {
  const List = data?.map((v) => {
    if (v.status !== status) {
      return;
    }
    return (
      <OperateBoxs
        setIsLoading={setIsLoading}
        data={v}
        isBuy={Boolean(tabLabel + 's') && isBuy}
        status={status}
      />
    );
  });
  return (
    <View>
      <Loading style={styles.loading} show={isLoaidng} />
      <ScrollView>{List?.join('') ? List : EmptyResult()}</ScrollView>
    </View>
  );
}
