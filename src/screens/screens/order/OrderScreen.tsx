import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  OrderStackList,
  MyAppState,
  OrderProps,
  GetBuyrtOrSellerResponse,
} from '@/types';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import {connect} from 'react-redux';
import {ActionTypes} from '@/store/actionTypes';
import {axios} from '@/api';
import GoodsStatus from '@/components/order/GoodsStatus';

import {OrderScreenStyles as styles} from '@/style';

//传递参数来确认是买家还是卖家
function OrderScreen({forceRefresh, setRefresh, user}: OrderProps) {
  const params = useRoute<RouteProp<OrderStackList, 'OrderScreen'>>().params;
  const [data, setData] = useState<GetBuyrtOrSellerResponse['data']>();
  useEffect(() => {
    if (params.isBuy) {
      axios
        .get<GetBuyrtOrSellerResponse>(`/order/buyer/${user._id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch(() => {});
    } else {
      axios
        .get<GetBuyrtOrSellerResponse>(`/order/seller/${user._id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch(() => {});
    }
  }, [forceRefresh]);
  const tabBarTitle = [
    {tabLabel: '待发货'},
    {tabLabel: '待收货'},
    {tabLabel: '待评价'},
    {tabLabel: '已完成'},
  ];
  const tabbarList = tabBarTitle.map((v, index) => {
    return (
      <GoodsStatus
        key={index}
        tabLabel={v.tabLabel}
        data={data}
        status={index as 0}
        isBuy={params.isBuy}
      />
    );
  });
  return (
    <View style={{flex: 1}}>
      <ScrollableTabView
        tabBarBackgroundColor="white"
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarActiveTextColor="red"
        tabBarInactiveTextColor="gray"
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        renderTabBar={() => <DefaultTabBar style={styles.tabbarStyle} />}>
        {tabbarList}
      </ScrollableTabView>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  forceRefresh: state.forceRefresh,
  user: state.user,
});

const dispatchToProps = (dispatch: Function) => ({
  setRefresh(status: boolean) {
    const action = {
      type: ActionTypes.ENABLE_FORCE_REFRESH,
      data: {
        status,
      },
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(OrderScreen);
