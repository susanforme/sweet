import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import {DepositBlanceStyles as styles} from '@/style';
import {axios} from '@/api';
import {GetCaptchaResponse, DepositBalanceProps} from '@/types';
import {Button} from 'beeshell/dist/components/Button';
import base64 from 'base-64';
import {SvgXml} from 'react-native-svg';
import {Tip} from 'beeshell/dist/components/Tip';
import Loading from '@/components/comm/Loading';
import {TopviewGetInstance} from 'beeshell/dist/components/Topview';

export default function DepositBlance({
  userId,
  hotAreaId,
  setIsRefresh,
  isRefresh,
}: DepositBalanceProps) {
  const [data, setData] = useState<GetCaptchaResponse['data']>();
  const [text, setText] = useState('');
  const [balance, setBalance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getCaptcha = () => {
    axios
      .get<GetCaptchaResponse>('/user/captcha')
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getCaptcha();
  }, []);
  return (
    <View style={styles.area}>
      <View style={styles.lineFather}>
        <View style={styles.line}>
          <Text style={styles.title}>充值金额:</Text>
          <TextInput
            placeholder="金额"
            style={styles.input}
            keyboardType="numeric"
            value={balance}
            maxLength={10}
            onChangeText={(text) => {
              if (!Object.is(Number(text), NaN) && Number(text) >= 0) {
                setBalance(text);
              }
            }}
          />
        </View>
      </View>
      <Loading title="充值中..." style={styles.loading} show={isLoading} />
      <View style={styles.lineFather}>
        <View style={styles.line}>
          <Text style={[styles.title, styles.rightTitle]}>验证码:</Text>
          <TextInput
            placeholder="验证码"
            style={styles.input}
            maxLength={4}
            value={text}
            onChangeText={(txt) => {
              setText(txt);
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              getCaptcha();
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
        <Button
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={() => {
            if (text.toLocaleLowerCase() !== data?.text.toLocaleLowerCase()) {
              getCaptcha();
              setText('');
              return Tip.show('验证码错误', 100);
            }
            if (!balance) {
              getCaptcha();
              return Tip.show('充值金额不能为空', 100);
            }
            setIsLoading(true);
            setTimeout(() => {
              axios
                .post('/user/balance', {
                  userId,
                  amount: Number(balance),
                })
                .then(() => {
                  setIsLoading(false);
                  setText('');
                  setIsRefresh(!isRefresh);
                  TopviewGetInstance().remove(hotAreaId);
                  return Tip.show('充值成功', 300);
                })
                .catch((err) => {
                  console.log(err);
                  setIsLoading(false);
                  setText('');
                  TopviewGetInstance().remove(hotAreaId);
                  return Tip.show('充值失败', 300);
                });
            }, 0);
          }}>
          提交
        </Button>
      </View>
    </View>
  );
}
