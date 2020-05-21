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
  SingleLocation,
} from '@/types';
import Loading from '@/components/comm/Loading';
import {LocationScreenStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import LocationInformationBox from '@/components/setting/LocationInformationBox';
import {Tip} from 'beeshell/dist/components/Tip';
import {ActionTypes} from '@/store/actionTypes';

function LocationStackScreen({
  userId,
  defaultLocationId,
  setDefaultLocation,
}: LocationStackScreenProps) {
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
      <LocationInformationBox
        key={v._id}
        data={v}
        onPress={() => {
          axios
            .delete(`/user/location/${userId}_${v._id}`)
            .then(() => {
              const newData = data?.filter((value) => {
                return value._id !== v._id;
              });
              setData(newData);
              Tip.show('删除成功', 1000);
              if (defaultLocationId === v._id) {
                setDefaultLocation({
                  _id: '',
                  area: '',
                  phoneNum: '',
                  name: '',
                });
              }
            })
            .catch(() => {
              Tip.show('删除失败,请稍后再试', 1000);
            });
        }}></LocationInformationBox>
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
  defaultLocationId: state.location._id,
});

const dispatchToProps = (dispatch: Function) => ({
  setDefaultLocation(data: SingleLocation) {
    const action = {
      type: ActionTypes.SET_DEFAULT_LOCATION,
      data: {location: data},
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(LocationStackScreen);
