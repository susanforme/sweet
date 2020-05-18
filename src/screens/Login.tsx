import React from 'react';
import {View} from 'react-native';
import LoginModule from '@/components/login/LoginModule';
import {padding} from '@/style';

export default function Login() {
  return (
    <View style={{flex: 1, ...padding, backgroundColor: 'white'}}>
      <LoginModule></LoginModule>
    </View>
  );
}
