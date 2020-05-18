import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {widthScale, padding} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation} from '@react-navigation/native';

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

const heightAndLineHeight = {
  height: 50 * widthScale,
  lineHeight: 50 * widthScale,
};

const styles = StyleSheet.create({
  topArea: {
    height: 50 * widthScale,
    backgroundColor: '#ffee00',
    ...padding,
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: 50 * widthScale,
    borderRadius: 10 * widthScale,
    height: 50 * widthScale,
  },
  userName: {
    ...heightAndLineHeight,
    paddingLeft: 10 * widthScale,
    fontSize: 20 * widthScale,
    fontWeight: '700',
  },
  personalFather: {
    ...heightAndLineHeight,
    position: 'absolute',
    right: 15 * widthScale,
    flex: 1,
    justifyContent: 'center',
  },
  personal: {
    backgroundColor: 'white',
    borderRadius: 50 * widthScale,
    height: 15 * widthScale,
    paddingLeft: 35 * widthScale,
    paddingRight: 35 * widthScale,
  },
});

interface UserTopAreaProps {
  userName: string;
  headImg: string;
  _id: string;
  isDefault: boolean;
}

interface MyImageStyle {
  style: StyleProp<ImageStyle>;
}
