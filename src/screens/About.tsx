import React, {useState} from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {SingleLineSettingArea as SingleLine} from '@/components/comm/SingleLineSettingArea';
import {AboutStyles as styles} from '@/style';
import {Tip} from 'beeshell/dist/components/Tip';
import Loading from '@/components/comm/Loading';

export default function About() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.about}>
      <Loading show={isLoading}></Loading>
      <View style={styles.area}>
        <Image
          source={require('@/resource/logo.png')}
          style={styles.img}></Image>
        <Text style={styles.tip}>Spring作品</Text>
        <Text style={styles.version}>甜虾Android版1.0.0</Text>
      </View>
      <SingleLine
        title="检查更新"
        style={styles.line}
        onPress={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              Tip.show('当前已经是最新版本', 1000, true, 'center');
            }, 0);
          }, 2000);
        }}></SingleLine>
      <SingleLine
        title="软件许可证协议"
        style={styles.line}
        onPress={() => {
          Tip.show('本软件遵循Apache2.0协议', 1000, true, 'center');
        }}></SingleLine>
      <SingleLine
        title="证照信息"
        style={styles.line}
        onPress={() => {
          Linking.openURL('https://www.wdf5.com');
        }}></SingleLine>
      <SingleLine
        title="QQ群"
        iconName="QQ"
        onPress={() => {
          const url = 'mqqwpa://im/chat?chat_type=wpa&uin=230521561';
          Linking.canOpenURL(url).then((supported) => {
            if (supported) {
              Linking.openURL(url);
            }
          });
        }}
        style={[styles.line, styles.lineMargin]}></SingleLine>
      <SingleLine
        title="给我发邮件"
        iconName="mail"
        style={styles.line}
        onPress={() => {
          Linking.openURL('mailto:rzc307853639@gmail.com');
        }}></SingleLine>
      <SingleLine
        title="联系我们"
        iconName="phone"
        style={styles.line}
        onPress={() => {
          Linking.openURL('tel:10086');
        }}></SingleLine>
      <Text style={styles.bottom}>@copyright spring版权所有</Text>
    </View>
  );
}
