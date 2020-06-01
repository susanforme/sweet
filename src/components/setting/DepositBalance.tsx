import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import {DepositBlanceStyles as styles} from '@/style';
import {axios} from '@/api';
import {GetCaptchaResponse} from '@/types';
import {Button} from 'beeshell/dist/components/Button';
import base64 from 'base-64';
// import SvgUri from 'react-native-svg-uri';
import {SvgXml} from 'react-native-svg';
export default function DepositBlance() {
  const [data, setData] = useState<GetCaptchaResponse['data']>();
  useEffect(() => {
    axios
      .get<GetCaptchaResponse>('/user/captcha')
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {});
  }, []);
  return (
    <View style={styles.area}>
      <View style={styles.lineFather}>
        <View style={styles.line}>
          <Text style={styles.title}>充值金额</Text>
          <TextInput placeholder="金额" style={styles.input} />
        </View>
      </View>
      <View style={styles.lineFather}>
        <View style={styles.line}>
          <Text style={styles.title}>验证码</Text>
          <TextInput placeholder="验证码" style={styles.input} />
          <TouchableWithoutFeedback
            onPress={() => {
              axios
                .get<GetCaptchaResponse>('/user/captcha')
                .then((res) => {
                  setData(res.data.data);
                })
                .catch(() => {});
            }}>
            <View style={styles.img}>
              {data?.imgPath && (
                <SvgXml
                  width="100%"
                  height="100%"
                  xml={base64.decode(
                    data?.imgPath.replace('data:image/svg+xml;base64,', '') ||
                      '',
                  )}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.btnCenter}>
        <Button style={styles.btn} textStyle={styles.btnText}>
          提交
        </Button>
      </View>
    </View>
  );
}
