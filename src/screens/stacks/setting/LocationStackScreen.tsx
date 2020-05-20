import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {axios} from '@/api';
import {connect} from 'react-redux';
import {MyAppState, LocationStackScreenProps} from '@/types';
import Loading from '@/components/comm/Loading';
import {LocationScreenStyles as styles} from '@/style';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation} from '@react-navigation/native';

function LocationStackScreen({userId}: LocationStackScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get(`/user/location/${userId}`)
      .then((res) => {
        if (!res.data.data) {
          setIsLoading(false);
          return setIsEmpty(true);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
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
