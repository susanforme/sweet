import React, {useState, useRef} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import {widthScale} from '@/style';
import {Input} from 'beeshell/dist/components/Input';
import {Form} from 'beeshell/dist/components/Form';
import {Button} from 'beeshell/dist/components/Button';
import Icon from 'react-native-vector-icons/Feather';
import LoginBottom from './LoginBottom';
import {Dialog} from 'beeshell/dist/components/Dialog';
import {axios} from '@/api';

export default function LoginModule() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isShow, setShow] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [animaHeight] = useState(new Animated.Value(0));
  const dialog = useRef<Dialog>(null);
  const translate = animaHeight.interpolate({
    inputRange: [0, 0.4, 1],
    outputRange: [0, 40, 60],
  });
  const fadeIn = () => {
    Animated.timing(animaHeight, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animaHeight, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
    }).start(() => {
      setRegister(false);
    });
  };
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
        <Animated.View
          style={[
            {opacity: animaHeight},
            {maxHeight: translate, scaleY: animaHeight},
          ]}>
          {isRegister ? (
            <Form.Item
              labelWidth={10}
              label={<PasswordIcon></PasswordIcon>}
              style={styles.item}>
              <Input
                style={styles.inputStyle}
                placeholder="请再次输入密码"
                value={rePassword}
                secureTextEntry={!isShow}
                maxLength={25}
                onChange={(data) => {
                  setRePassword(data as any);
                }}></Input>
            </Form.Item>
          ) : null}
        </Animated.View>
        <Button style={styles.button} textStyle={{color: 'white'}}>
          {isRegister ? '注册' : '登录'}
        </Button>
        <Dialog title="错误提示" bodyText="hello" ref={dialog}></Dialog>
        <LoginBottom
          isRegister={isRegister}
          fade={isRegister ? fadeOut : fadeIn}
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

function checkPassword(
  user: string,
  password: string,
  rePassword: string,
  isRegister: boolean,
  setError: Function,
) {
  const userReg = /^[a-zA-z]\w{3,15}$/;
  const passwordReg = /^[\w_-]{6,16}$/;
  if (!isRegister) {
    return axios.post('/user/login', {
      userName: user,
      password,
    });
  } else {
    if (password !== rePassword) {
      return setError('两次密码不相等');
    }
    if (!user.match(userReg)) {
      return setError('用户名过于简单');
    }
    if (!password.match(passwordReg)) {
      return setError('密码过于简单');
    }
  }
}
