import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckOrderLocationStyles as styles} from '@/style';
import {connect} from 'react-redux';
import {MyAppState, CheckOrderLocationProps} from '@/types';
import {useNavigation} from '@react-navigation/native';

function CheckOrderLocation({location}: CheckOrderLocationProps) {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate('Setting', {
          screen: 'LocationScreen',
        });
      }}>
      <View style={styles.area}>
        <Icon name="enviromento" size={20} color="gray" />
        <Text style={styles.title}>收货地址</Text>
        <View style={styles.right}>
          <Text style={styles.rightText}>
            {location?.area} {location?.name}
          </Text>
          <Icon name="right" size={20} color="gray" />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const stateToProps = (state: MyAppState) => ({
  location: state.location,
});

export default connect(stateToProps)(CheckOrderLocation);
