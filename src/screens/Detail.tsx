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
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';

export default function Detail() {
  const route = useRoute<RouteProp<MainStackList, 'Detail'>>();
  const [data, setData] = useState<getInfoResponse['data']>();
  const [showImg, setShowImg] = useState(false);
  const Images = data?.imgPath.map((v, index) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => {
          setShowImg(true);
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
        <View style={styles.head}>
          <Image
            style={styles.headImg}
            source={{uri: data?.user.headImg}}></Image>
          <View style={styles.headRight}>
            <View style={styles.userNameArea}>
              <Text style={styles.userName} numberOfLines={1}>
                {data?.user.userName}
              </Text>
              <View style={styles.iconArea}>
                <Icon name="pushpin" style={styles.userNameIcon}></Icon>
                <Text style={styles.iconText}>信用极好</Text>
              </View>
            </View>
            <Text style={styles.location}>发布于四川</Text>
          </View>
        </View>
        <View style={styles.priceArea}>
          <Text style={styles.priceLeft}>
            ¥ <Text style={styles.priceText}>{data?.price}</Text>
          </Text>
          <View style={styles.priceRight}>
            <Text style={styles.priceRightText}>包邮</Text>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{data?.description}</Text>
        </View>
        {Images}
        {showImg ? (
          <Modal
            visible={true}
            transparent={true}
            animationType="fade"
            presentationStyle="fullScreen"
            onRequestClose={() => setShowImg(false)}>
            <ImageViewer
              imageUrls={imgs}
              enableSwipeDown
              useNativeDriver
              renderHeader={() => {
                return (
                  <NavigationBar
                    backLabelText=""
                    backLabelIcon={
                      <Icon
                        name="arrowleft"
                        style={styles.headerIcon}
                        size={25 * widthScale}></Icon>
                    }
                    style={styles.imgHeader}></NavigationBar>
                );
              }}
              onClick={(onCancel) => {
                if (onCancel) {
                  onCancel();
                }
              }}
              onCancel={() => {
                setShowImg(false);
              }}></ImageViewer>
          </Modal>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
