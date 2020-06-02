import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {
  OrderStackList,
  MyAppState,
  CheckOrderProps,
  DialogState,
  GetBalanceResponse,
} from '@/types';
import CheckOrderTopArea from '@/components/order/CheckOrderTopArea';
import CheckOrderBottomButton from '@/components/order/CheckOrderBottomButton';
import CheckOrderLocation from '@/components/order/CheckOrderLocation';
import {connect} from 'react-redux';
import {Dialog} from 'beeshell/dist/components/Dialog';
import {axios} from '@/api';
import {ActionTypes} from '@/store/actionTypes';
import Loading from '@/components/comm/Loading';

function CheckOrder({
  location,
  user,
  forceRefresh,
  changeForceRefreshStatus,
}: CheckOrderProps) {
  const params = useRoute<RouteProp<OrderStackList, 'CheckOrder'>>().params;
  const [dialogData, setDialogData] = useState<DialogState>();
  const [isLoading, setIsLoading] = useState(false);
  const dialogRef = useRef<Dialog>(null);
  const navigation = useNavigation();
  const check = () => {
    if (!location?._id) {
      setDialogData({
        bodyText: '未设置默认地址,是否设置默认地址',
        confirmCallback() {
          navigation.navigate('Setting', {
            screen: 'LocationScreen',
          });
        },
      });
      setTimeout(() => {
        dialogRef.current?.open();
      }, 0);
      return;
    }
    axios
      .get<GetBalanceResponse>(`/user/balance/${user._id}`)
      .then((res) => {
        if (res.data.data.balance < params.price) {
          setDialogData({
            bodyText: '余额不足是否进行充值',
            confirmCallback() {
              navigation.navigate('Setting', {
                screen: 'BalanceScreen',
              });
            },
          });
          setTimeout(() => {
            dialogRef.current?.open();
          }, 0);
          return;
        }
      })
      .then(() => {
        setIsLoading(true);
        setTimeout(async () => {
          await axios.post('/order', {
            commodityId: params.id,
            receive: {
              area: location.area,
              phoneNum: location.phoneNum,
              name: location.name,
            },
            buyerId: user._id,
            sellerId: params.owner,
          });
          setIsLoading(false);
          changeForceRefreshStatus(!forceRefresh);
          navigation.navigate('Tab', {
            screen: 'User',
          });
        }, 0);
      })
      .catch(() => {});
  };
  return (
    <View style={{flex: 1}}>
      <CheckOrderTopArea
        description={params.description}
        price={params.price}
        imgPath={params.imgPath}
      />
      <CheckOrderLocation />
      <Dialog
        ref={dialogRef}
        title="提示"
        bodyText={dialogData?.bodyText}
        confirmCallback={dialogData?.confirmCallback}
      />
      {isLoading && <Loading title="购买中" />}
      <CheckOrderBottomButton price={params.price} onPress={check} />
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  location: state.location,
  user: state.user,
  forceRefresh: state.forceRefresh,
});

const dispatchToProps = (dispatch: Function) => ({
  changeForceRefreshStatus(status: boolean) {
    const action = {
      type: ActionTypes.ENABLE_FORCE_REFRESH,
      data: {
        status,
      },
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(CheckOrder);
