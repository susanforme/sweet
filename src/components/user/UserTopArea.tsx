import React from 'react';
import {View, Text, Image, StyleProp, ImageStyle} from 'react-native';
import {widthScale, UserTopAreaStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation} from '@react-navigation/native';
import {UserTopAreaProps} from '@/types';

export default function UserTopArea({
  userName,
  headImg,
  isDefault,
}: UserTopAreaProps) {
  const navigation = useNavigation();
  let TopImg = ({style}: MyImageStyle) => {
    let Img = <Image source={{uri: headImg}} style={style}></Image>;
    if (isDefault) {
      Img = (
        <Image source={require('@/resource/default.jpg')} style={style}></Image>
      );
    }
    return Img;
  };
  if (isDefault) {
    userName = '点击登录';
  }
  return (
    <View style={styles.topArea}>
      <TopImg style={styles.img}></TopImg>
      <Text
        style={styles.userName}
        numberOfLines={1}
        ellipsizeMode={'tail'}
        onPress={() => {
          if (isDefault) {
            navigation.navigate('Login');
          }
        }}>
        {userName}
      </Text>
      <View style={styles.personalFather}>
        <Button
          type="primary"
          size="lg"
          style={styles.personal}
          textStyle={{
            marginLeft: -50 * widthScale,
            marginRight: -50 * widthScale,
            fontSize: 13 * widthScale,
          }}
          onPress={() => navigation.navigate('Profile')}
          textColorInverse={true}>
          个人主页
        </Button>
      </View>
    </View>
  );
}

interface MyImageStyle {
  style: StyleProp<ImageStyle>;
}
