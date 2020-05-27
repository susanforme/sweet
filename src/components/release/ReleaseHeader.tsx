import React from 'react';
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';
import {StatusBar, Text} from 'react-native';
import {widthScale, ReleaseHeaderStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {StackHeaderProps} from '@react-navigation/stack/lib/typescript/src/types';

export default function SettingHeader({navigation}: StackHeaderProps) {
  const height = StatusBar.currentHeight || 30;
  return (
    <NavigationBar
      backLabel={<Text style={{fontSize: 15 * widthScale}}>取消</Text>}
      style={{
        height: height * 2.8,
        paddingTop: height,
      }}
      forwardLabel={<Button style={styles.btn}>发布</Button>}
      onPressBack={() => {
        navigation.goBack();
      }}
      titleStyle={{fontSize: height * 0.8}}
      title="发布"></NavigationBar>
  );
}
