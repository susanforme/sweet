import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {widthScale} from '@/style';
import {Input} from 'beeshell/dist/components/Input';
import {Form} from 'beeshell/dist/components/Form';
import {Button} from 'beeshell/dist/components/Button';
import Icon from 'react-native-vector-icons/Feather';
import LoginBottom from './LoginBottom';

export default function LoginModule() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setShow] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const PasswordIcon = () => {
    if (!isShow) {
      return (
        <Icon
          name="eye-off"
          size={18 * widthScale}
          style={styles.icon}
          onPress={() => setShow(true)}></Icon>
      );
    } else {
      return (
        <Icon
          name="eye"
          size={18 * widthScale}
          style={styles.icon}
          onPress={() => setShow(false)}></Icon>
      );
    }
  };

  return (
    <View style={styles.module}>
      <Image
        source={require('@/resource/logo.png')}
        style={styles.image}></Image>
      <Form style={styles.form}>
        <Form.Item
          labelWidth={10}
          label={<Icon name="user" size={20} style={styles.icon}></Icon>}
          style={styles.item}>
          <Input
            style={styles.inputStyle}
            placeholder="请输入甜虾账户"
            value={user}
            maxLength={20}
            onChange={(data) => {
              setUser(data as any);
            }}></Input>
        </Form.Item>
        <Form.Item
          labelWidth={10}
          label={<PasswordIcon></PasswordIcon>}
          style={styles.item}>
          <Input
            style={styles.inputStyle}
            placeholder="请输入密码"
            value={password}
            secureTextEntry={!isShow}
            maxLength={25}
            onChange={(data) => {
              setPassword(data as any);
            }}></Input>
        </Form.Item>
        {isRegister ? (
          <Form.Item
            labelWidth={10}
            label={<PasswordIcon></PasswordIcon>}
            style={styles.item}>
            <Input
              style={styles.inputStyle}
              placeholder="请再次输入密码"
              value={password}
              secureTextEntry={!isShow}
              maxLength={25}
              onChange={(data) => {
                setPassword(data as any);
              }}></Input>
          </Form.Item>
        ) : null}
        <Button style={styles.button} textStyle={{color: 'white'}}>
          {isRegister ? '注册' : '登录'}
        </Button>
        <LoginBottom
          isRegister={isRegister}
          setRegister={setRegister}></LoginBottom>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  module: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60 * widthScale,
  },
  image: {
    width: 70 * widthScale,
    height: 70 * widthScale,
  },
  inputStyle: {
    backgroundColor: 'white',
    textAlignVertical: 'bottom',
    height: 45 * widthScale,
  },
  form: {
    width: '100%',
  },
  item: {
    borderBottomColor: '#F79286',
    borderBottomWidth: 1,
    paddingTop: 20 * widthScale,
    paddingBottom: 0,
  },
  icon: {
    marginLeft: -10 * widthScale,
    marginRight: 10 * widthScale,
  },
  button: {
    borderRadius: 50 * widthScale,
    backgroundColor: 'rgba(253, 159, 131, 0.781)',
    marginTop: 40 * widthScale,
  },
});
