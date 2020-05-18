import React from 'react';
import {useHeaderHeight} from '@react-navigation/stack';
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function UserHeader() {
  const height = useHeaderHeight();
  const navigation = useNavigation();
  const paddingTop = StatusBar.currentHeight || 30;
  return (
    <NavigationBar
      backLabelText=""
      backLabelIcon={<Text></Text>}
      style={{height: height * 0.7, backgroundColor: '#ffee11', paddingTop}}
      onPressForward={() => {
        navigation.navigate('Setting');
      }}
      forwardLabel={<Icon name="setting" size={height * 0.31}></Icon>}
      title=""></NavigationBar>
  );
}
