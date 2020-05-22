import React, {useState, useEffect} from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-swiper';
import {axios} from '@/api';
import {HomeSwiperInitData} from '@/types';
import {HomeSwiperStyles as styles, widthScale} from '@/style';

export default function SearchInput() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<HomeSwiperInitData>([
    {_id: '', imgPath: ''},
  ]);
  const Images = data.map((v) => {
    return (
      <Image source={{uri: v.imgPath}} key={v._id} style={styles.img}></Image>
    );
  });
  useEffect(() => {
    axios
      .get('/carousel')
      .then((res) => {
        setData(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 0);
      })
      .catch(() => {});
  }, []);
  return (
    <View style={styles.father}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loading}
          size={40 * widthScale}
          color="#ffee00"
        />
      ) : (
        <Swiper autoplay activeDotColor="#ffee00" style={styles.swiper}>
          {Images}
        </Swiper>
      )}
    </View>
  );
}
