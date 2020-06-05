import React from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import {AllGoodsProps} from '@/types';
import OperateBoxs from '@/components/comm/OperateBoxs';
import {OperateBoxsStyles as styles} from '@/style';
import Loading from '@/components/comm/Loading';

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
      <ScrollView>{List?.join('') ? List : renderEmpty()}</ScrollView>
    </View>
  );
}

function renderEmpty() {
  return (
    <View style={styles.empty}>
      <Image
        source={require('@/resource/empty-image-default.png')}
        style={styles.emptyImg}
      />
      <Text style={styles.emptyText}>您还没有相关订单</Text>
    </View>
  );
}
