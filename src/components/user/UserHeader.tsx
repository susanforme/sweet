import React from 'react';
import {useHeaderHeight} from '@react-navigation/stack';
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function UserHeader() {
  const height = useHeaderHeight();
  const navigation = useNavigation();
  return (
    <NavigationBar
      backLabelText=""
      backLabelIcon={<Text></Text>}
      style={{height: height * 0.8, backgroundColor: '#ffee11'}}
      onPressForward={() => {
        navigation.navigate('Setting');
      }}
      forwardLabel={<Icon name="setting" size={height * 0.4}></Icon>}
      title=""></NavigationBar>
  );
}
