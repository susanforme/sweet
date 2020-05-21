import {View, Text, TextInput as Input} from 'react-native';
import React, {useState} from 'react';
import {AddLocationScreenStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {Switch} from 'beeshell/dist/components/Switch';
import Loading from '@/components/comm/Loading';
import {Tip} from 'beeshell/dist/components/Tip';
import {connect} from 'react-redux';
import {axios} from '@/api';
import {
  MyAppState,
  AddLocationScreenProps,
  PostLocationResponse,
} from '@/types';
import {ActionTypes} from '@/store/actionTypes';
import {useNavigation} from '@react-navigation/native';

function AddLocationScreen({
  userId,
  setDefaultLocation,
}: AddLocationScreenProps) {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [area, setArea] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.area}>
      <View style={styles.content}>
        <View style={styles.box}>
          <Text style={styles.title}>姓名</Text>
          <Input
            placeholder="收货人姓名"
            value={name}
            numberOfLines={1}
            style={styles.input}
            onChangeText={(data) => {
              setName(data);
            }}></Input>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>电话号码</Text>
          <Input
            placeholder="收货人手机号码"
            value={phoneNum}
            style={styles.input}
            onChangeText={(data) => {
              const newText = data.replace(/[^\d]+/, '');
              setPhoneNum(newText);
            }}></Input>
        </View>
        <View style={[styles.box, {borderBottomWidth: 0}]}>
          <Text style={styles.title}>地址</Text>
          <Input
            placeholder="省/市/区/街道门派等信息"
            value={area}
            maxLength={30}
            style={styles.input}
            onChangeText={(data) => {
              setArea(data);
            }}></Input>
        </View>
      </View>
      <View style={[styles.box, styles.bottom]}>
        <Text style={[styles.title, styles.defaultLocation]}>
          设为默认收货地址
        </Text>
        <Switch
          activeColor="greenyellow"
          rockerSize="lg"
          onChange={(status: any) => {
            setIsDefault(status);
          }}
          style={styles.switch}
          value={isDefault}></Switch>
      </View>
      <Button
        type="danger"
        style={styles.btn}
        onPress={() => {
          setIsLoading(true);
          if (!(name.trim() && phoneNum.trim() && area.trim())) {
            setIsLoading(false);
            setTimeout(() => {
              Tip.show('请注意姓名电话号码,地址都不能为空', 1000, true);
            }, 0);
            return;
          }
          if (!phoneNum.match(/^1[3456789]\d{9}$/)) {
            setIsLoading(false);
            setTimeout(() => {
              Tip.show('手机号码格式错误', 1000, true);
            }, 0);
            return;
          }
          axios
            .post<PostLocationResponse>('/user/location', {
              userId,
              area,
              phoneNum: Number(phoneNum),
              name,
            })
            .then((res) => {
              setIsLoading(false);
              setTimeout(() => {
                setDefaultLocation(res.data.data.information.reverse()[0]);
                navigation.navigate('Setting', {
                  screen: 'LocationScreen',
                  refresh: Math.random(),
                });
              }, 0);
            })
            .catch(() => {
              setIsLoading(false);
              return Tip.show('网络错误', 1000, true);
            });
        }}>
        保存
      </Button>
      <Button
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Setting', {
            screen: 'LocationScreen',
            refresh: Math.random(),
          });
        }}>
        删除
      </Button>
      <Loading title="添加中..." show={isLoading}></Loading>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  userId: state.user._id,
});

const dispatchToProps = (dispatch: Function) => ({
  setDefaultLocation(data: MyAppState['location']) {
    const action = {
      type: ActionTypes.SET_DEFAULT_LOCATION,
      data: {location: data},
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(AddLocationScreen);
