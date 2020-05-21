import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {LocationBoxProps, MyAppState, SingleLocation} from '@/types';
import {LocationInformationBoxStyles as styles} from '@/style';
import {connect} from 'react-redux';
import {ActionTypes} from '@/store/actionTypes';

function LocationInformationBox({
  data,
  defaultLocationId,
  setDefaultLocation,
  onPress,
}: LocationBoxProps) {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        setDefaultLocation(data);
      }}>
      <View style={styles.box}>
        <View style={styles.touchBorder}>
          <View
            style={[
              styles.check,
              data._id === defaultLocationId
                ? {backgroundColor: 'red'}
                : {backgroundColor: 'white'},
            ]}>
            <Icon
              name="check"
              style={styles.checkIcon}
              size={15}
              color="white"></Icon>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentTop}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.phoneNum}>{data.phoneNum} </Text>
            {defaultLocationId === data._id ? (
              <Text style={styles.default}>默认</Text>
            ) : null}
          </View>
          <Text style={styles.area}>{data.area}</Text>
        </View>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}>
          <View>
            <Icon name="delete" size={15}></Icon>
          </View>
        </TouchableNativeFeedback>
      </View>
    </TouchableNativeFeedback>
  );
}

const stateToProps = (state: MyAppState) => ({
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

export default connect(stateToProps, dispatchToProps)(LocationInformationBox);
