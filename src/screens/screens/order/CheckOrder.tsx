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

function CheckOrder({location, user}: CheckOrderProps) {
  const params = useRoute<RouteProp<OrderStackList, 'CheckOrder'>>().params;
  const [dialogData, setDialogData] = useState<DialogState>();
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
        }
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
      <CheckOrderBottomButton price={params.price} onPress={check} />
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  location: state.location,
  user: state.user,
});

export default connect(stateToProps)(CheckOrder);
