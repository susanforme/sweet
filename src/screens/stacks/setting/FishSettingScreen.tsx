import React from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'beeshell/dist/components/Switch';
import {connect} from 'react-redux';
import {ActionTypes} from '@/store/actionTypes';
import {FishSettingScreenProps, MyAppState} from '@/types';
import {FishBondScreenSettingStyles as styles} from '@/style';

function FishSettingScreen({
  changeFishStatus,
  defaultFish,
}: FishSettingScreenProps) {
  return (
    <View style={styles.area}>
      <Text>不接受鱼塘邀请</Text>
      <Switch
        style={styles.right}
        activeColor="yellowgreen"
        value={Boolean(defaultFish)}
        onChange={(status: boolean) => {
          changeFishStatus(status);
        }}></Switch>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  defaultFish: state.fishBondStatus,
});

const dispatchToProps = (dispatch: Function) => ({
  changeFishStatus(status: boolean) {
    const action = {
      type: ActionTypes.CHANGE_FISH_BOND_STATUS,
      data: {
        status,
      },
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(FishSettingScreen);
