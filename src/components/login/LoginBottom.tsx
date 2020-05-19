import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthScale} from '@/style';
import {LoginBottomProps} from '@/types';

export default function LoginBottom({
  isRegister,
  setRegister,
  fade,
  style,
}: LoginBottomProps) {
  return (
    <View style={[styles.bottom, style]}>
      <Text style={styles.text}>隐私条款</Text>
      <Text
        style={{...styles.right, ...styles.text}}
        onPress={() => {
          fade();
          setRegister(true);
        }}>
        {isRegister ? '已经有账号?' : '注册'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 20 * widthScale,
  },
  right: {
    position: 'absolute',
    right: 15 * widthScale,
  },
  text: {
    fontSize: 15 * widthScale,
    color: 'gray',
  },
});
