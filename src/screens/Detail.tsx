import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {MainStackList, getInfoResponse} from '@/types';
import {axios} from '@/api';
import {DetailStyles as styles, widthScale} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageViewer from 'react-native-image-zoom-viewer';
import {getRandomNumber} from '@/tools';
import Comment from '@/components/Detail/Comment';
import UserMsg from '@/components/Detail/UserMsg';
import ContentTop from '@/components/Detail/ContentTop';

export default function Detail() {
  const route = useRoute<RouteProp<MainStackList, 'Detail'>>();
  const [data, setData] = useState<getInfoResponse['data']>();
  const [showImg, setShowImg] = useState(false);
  const [index, setIndex] = useState(0);
  const Images = data?.imgPath.map((v, index) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => {
          setIndex(index);
          setTimeout(() => {
            setShowImg(true);
          }, 0);
        }}>
        <Image source={{uri: v}} style={styles.image}></Image>
      </TouchableWithoutFeedback>
    );
  });
  const imgs = data?.imgPath.map((v) => {
    return {url: v, props: {}};
  }) || [{url: '', props: {}}];
  useEffect(() => {
    axios
      .get<getInfoResponse>(`/commodity/info/${route.params.commodityId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {});
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.area}>
        <ContentTop data={data}></ContentTop>
        <View style={styles.imageFather}>{Images}</View>
        <View style={styles.bottom}>
          <Text style={styles.guarantee}>
            <Icon name="alipay-square" size={18 * widthScale}></Icon> 担保交易
          </Text>
          <Text style={styles.bottomRight}>
            {getRandomNumber(0, 10)}人想要·浏览{getRandomNumber(10, 1000)}
          </Text>
        </View>
        <Modal
          visible={showImg}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowImg(false)}>
          <ImageViewer
            imageUrls={imgs}
            enableSwipeDown
            useNativeDriver
            index={index}
            menuContext={{saveToLocal: '保存到本地', cancel: '取消'}}
            onClick={(onCancel) => {
              if (onCancel) {
                onCancel();
              }
            }}
            onCancel={() => {
              setShowImg(false);
            }}></ImageViewer>
        </Modal>
        <UserMsg user={data?.user}></UserMsg>
        <Comment comment={data?.comment || []}></Comment>
      </ScrollView>
    </SafeAreaView>
  );
}
