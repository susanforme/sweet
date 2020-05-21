import {View, Text, TextInput as Input} from 'react-native';
import React, {useState} from 'react';
import {AddLocationScreenStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {Switch} from 'beeshell/dist/components/Switch';
import Loading from '@/components/comm/Loading';

export default function AddLocationScreen() {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [area, setArea] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
              setPhoneNum(data);
            }}></Input>
        </View>
        <View style={[styles.box, {borderBottomWidth: 0}]}>
          <Text style={styles.title}>地址</Text>
          <Input
            placeholder="省/市/区/街道门派等信息"
            value={area}
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
      <Button type="danger" style={styles.btn}>
        保存
      </Button>
      <Button style={styles.btn}>删除</Button>
      <Loading title="添加中..." show={isLoading}></Loading>
    </View>
  );
}
