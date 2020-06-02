import React from 'react';
import {View} from 'react-native';
import {MyAppState, ProfileProps} from '@/types';
import {connect} from 'react-redux';
import ProfileTopArea from '@/components/profile/ProfileTopArea';

function Profile({forceRefresh}: ProfileProps) {
  return (
    <View style={{flex: 1}}>
      <ProfileTopArea />
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  forceRefresh: state.forceRefresh,
});

export default connect(stateToProps)(Profile);
