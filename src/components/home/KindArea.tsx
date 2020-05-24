import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import {axios} from '@/api';
import {KindAreaGetResponse} from '@/types';
import {KindAreaStyles as styles, widthScale} from '@/style';
import {useNavigation} from '@react-navigation/native';

export default function KindArea() {
  const [data, setData] = useState<KindAreaGetResponse['data']>();
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const Area = data?.map((v) => {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)')}
        key={v._id}
        onPress={() => {
          navigation.navigate('Classificat', {
            kindId: v._id,
            kindName: v.kindName,
          });
        }}>
        <View style={styles.box}>
          <Image source={{uri: v.imgPath}} style={styles.img}></Image>
          <Text>{v.kindName}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  });
  useEffect(() => {
    axios
      .get<KindAreaGetResponse>('/commodity/kind')
      .then((res) => {
        setData(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 0);
      })
      .catch(() => {});
  }, []);
  return (
    <View style={styles.area}>
      {isLoading ? (
        <ActivityIndicator
          size={40 * widthScale}
          color="#ffee00"
          style={styles.loading}
        />
      ) : (
        Area
      )}
    </View>
  );
}
