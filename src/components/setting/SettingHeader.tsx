import React from 'react';
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SettingHeader() {
  const navigation = useNavigation();
  const height = StatusBar.currentHeight || 30;

  return (
    <NavigationBar
      backLabelText=""
      backLabelIcon={<Icon name="arrowleft" size={height * 0.88}></Icon>}
      style={{
        height: height * 2.8,
        backgroundColor: '#ffffff',
        paddingTop: height,
      }}
      onPressBack={() => {
        navigation.goBack();
      }}
      titleStyle={{fontSize: height * 0.8}}
      title="设置"></NavigationBar>
  );
}
