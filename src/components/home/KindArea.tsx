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

export default function KindArea() {
  const [data, setData] = useState<KindAreaGetResponse['data']>();
  const [isLoading, setIsLoading] = useState(true);
  const Area = data?.map((v) => {
    return (
      <TouchableNativeFeedback key={v._id}>
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
