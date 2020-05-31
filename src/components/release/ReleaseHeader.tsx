import React from 'react';
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';
import {StatusBar, Text} from 'react-native';
import {widthScale, ReleaseHeaderStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation} from '@react-navigation/native';

export default function SettingHeader({onPress}: {onPress: Function}) {
  const height = StatusBar.currentHeight || 30;
  const navigation = useNavigation();

  return (
    <NavigationBar
      backLabel={<Text style={{fontSize: 15 * widthScale}}>取消</Text>}
      style={{
        height: height * 2.8,
        paddingTop: height,
      }}
      forwardLabel={
        <Button style={styles.btn} onPress={onPress}>
          发布
        </Button>
      }
      onPressBack={() => {
        navigation.goBack();
      }}
      onPressForward={onPress}
      titleStyle={{fontSize: height * 0.8}}
      title="发布"></NavigationBar>
  );
}
