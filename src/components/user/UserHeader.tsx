import React from 'react';
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function UserHeader({
  backgroundColor = '#ffee11',
}: {
  backgroundColor: string;
}) {
  const navigation = useNavigation();
  const height = StatusBar.currentHeight || 30;
  return (
    <NavigationBar
      backLabelText=""
      backLabelIcon={<Text></Text>}
      style={{
        height: height * 2.4,
        backgroundColor: backgroundColor,
        paddingTop: height,
      }}
      onPressForward={() => {
        navigation.navigate('Setting');
      }}
      forwardLabel={
        <Icon name="setting" color="gray" size={height * 1.1}></Icon>
      }
      title=""></NavigationBar>
  );
}
