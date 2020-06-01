import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {BalanceScreenStyles as styles, widthScale} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {axios} from '@/api';
import {connect} from 'react-redux';
import {MyAppState, BalanceScreenProps, GetBalanceResponse} from '@/types';
import {Button} from 'beeshell/dist/components/Button';
import {TopviewGetInstance} from 'beeshell/dist/components/Topview';
import DepositBalance from '@/components/setting/DepositBalance';

function BalanceScreen({user}: BalanceScreenProps) {
  const [isRefresh, setIsRefresh] = useState(false);
  const [balance, setBalance] = useState(0);
  const [hotAreaId, setHotAreaId] = useState(1);
  useEffect(() => {
    axios
      .get<GetBalanceResponse>(`/user/balance/${user._id}`)
      .then((res) => {
        setBalance(res.data.data.balance);
      })
      .catch(() => {});
  }, [isRefresh]);

  return (
    <View style={styles.area}>
      <Icon
        name="pay-circle1"
        size={70 * widthScale}
        color="#F6C543"
        style={styles.icon}
      />
      <Text style={styles.title}>我的余额</Text>
      <Text style={styles.balance}>¥ {balance}</Text>
      <Button
        style={styles.btn}
        textStyle={styles.text}
        onPress={() => {
          TopviewGetInstance()
            .add(renderFullScreenView(hotAreaId))
            .then((id: any) => {
              setHotAreaId(id);
            });
        }}>
        充值
      </Button>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
});

export default connect(stateToProps)(BalanceScreen);

function renderFullScreenView(hotAreaId: number) {
  return (
    <View style={styles.full}>
      <TouchableWithoutFeedback
        onPress={() => {
          TopviewGetInstance().remove(hotAreaId);
        }}>
        <View style={styles.full}></View>
      </TouchableWithoutFeedback>
      <DepositBalance />
    </View>
  );
}
