import React, {useState, useRef, useEffect} from 'react';
import {Image, Animated, KeyboardAvoidingView} from 'react-native';
import {widthScale, LoginModuleStyles as styles} from '@/style';
import {Input} from 'beeshell/dist/components/Input';
import {Form} from 'beeshell/dist/components/Form';
import {Button} from 'beeshell/dist/components/Button';
import Icon from 'react-native-vector-icons/Feather';
import LoginBottom from './LoginBottom';
import {Dialog} from 'beeshell/dist/components/Dialog';
import {axios} from '@/api';
import MD5 from 'md5';
import {connect} from 'react-redux';
import {UserResponse, LoginModuleProps, MyAppState} from '@/types';
import {ActionTypes} from '@/store/actionTypes';
import {useNavigation} from '@react-navigation/native';

function LoginModule({
  addUser,
  isLogin,
  forceRefresh,
  setRefresh,
}: LoginModuleProps) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isShow, setShow] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [animaHeight] = useState(new Animated.Value(0));
  const [error, setError] = useState('');
  const dialogRef = useRef<Dialog>(null);
  const navigation = useNavigation();
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

  useEffect(() => {
    if (isLogin) {
      navigation.goBack();
    }
  }, [isLogin]);
  return (
    <KeyboardAvoidingView style={styles.module} enabled>
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
        <Button
          style={styles.button}
          textStyle={{color: 'white'}}
          onPress={() => {
            checkPassword(user, password, rePassword, isRegister)
              .then((data) => {
                setRefresh(!forceRefresh);
                addUser(data.data.data);
              })
              .catch((err) => {
                setRefresh(!forceRefresh);
                setError(err.message);
                dialogRef.current?.open();
              });
          }}>
          {isRegister ? '注册' : '登录'}
        </Button>
        <Dialog
          title="错误提示"
          titleStyle={{color: 'red'}}
          bodyText={error}
          ref={dialogRef}
          cancelLabelText={''}></Dialog>
        <LoginBottom
          isRegister={isRegister}
          fade={isRegister ? fadeOut : fadeIn}
          setRegister={setRegister}></LoginBottom>
      </Form>
    </KeyboardAvoidingView>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
  forceRefresh: state.forceRefresh,
});

const dispatchToProps = (dispatch: Function) => ({
  addUser: (user: UserResponse) => {
    const action = {
      type: ActionTypes.ADD_USER_MSG,
      data: {user},
    };
    dispatch(action);
  },
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

export default connect(stateToProps, dispatchToProps)(LoginModule);

async function checkPassword(
  user: string,
  password: string,
  rePassword: string,
  isRegister: boolean,
) {
  const passwordReg = /^[\w_-]{6,16}$/;
  if (!isRegister) {
    if (!user || !password) {
      throw new Error('密码不能为空');
    }
    const data = await axios
      .post('/user/login', {
        userName: user,
        password: MD5(password),
      })
      .catch((err) => {
        throw new Error(err.response?.data?.data.msg || '网络错误');
      });
    return data;
  } else {
    if (password !== rePassword) {
      throw new Error('两次密码不相同');
    }
    if (user.length < 6) {
      throw new Error('用户名过于简单');
    }
    if (!password.match(passwordReg)) {
      throw new Error('密码过于简单');
    }
    const data = await axios
      .post('/user/register', {
        userName: user,
        password: MD5(password),
      })
      .catch((err) => {
        throw new Error(err.response.data.data.msg);
      });
    return data;
  }
}
