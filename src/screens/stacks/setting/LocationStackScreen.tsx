import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {axios} from '@/api';
import {connect} from 'react-redux';
import {
  MyAppState,
  LocationStackScreenProps,
  SettingStackList,
  LocationData,
  GetLocationResponse,
} from '@/types';
import Loading from '@/components/comm/Loading';
import {LocationScreenStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import LocationInformationBox from '@/components/setting/LocationInformationBox';

function LocationStackScreen({userId}: LocationStackScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState<LocationData['information']>();
  const route = useRoute<RouteProp<SettingStackList, 'LocationScreen'>>();
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get<GetLocationResponse>(`/user/location/${userId}`)
      .then((res) => {
        setIsLoading(false);
        setTimeout(() => {
          if (!res.data.data) {
            return setIsEmpty(true);
          }
          setData(res.data.data.reverse().slice(0, 5));
        }, 0);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [route.params?.refresh]);
  const InformationBoxs = data?.map((v) => {
    return (
      <LocationInformationBox key={v._id} data={v}></LocationInformationBox>
    );
  });
  return (
    <View style={styles.area}>
      {isEmpty ? (
        <View style={styles.imgFather}>
          <Image
            source={require('@/resource/noResult.jpg')}
            style={styles.img}></Image>
          <Text style={styles.text}>什么都没有哦~</Text>
        </View>
      ) : null}
      {InformationBoxs}
      <Loading show={isLoading}></Loading>
      <Button
        type="danger"
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Setting', {
            screen: 'AddLocationScreen',
          });
        }}>
        新增地址
      </Button>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  userId: state.user._id,
});

export default connect(stateToProps)(LocationStackScreen);
