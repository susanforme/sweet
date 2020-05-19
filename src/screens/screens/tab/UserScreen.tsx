import React from 'react';
import {ScrollView} from 'react-native';
import {MyAppState, UserScreenProps} from '@/types';
import {connect} from 'react-redux';
import UserTopArea from '@/components/user/UserTopArea';

function UserScreen({isLogin, user}: UserScreenProps) {
  const {userName, _id, headImg} = user;
  let isDefault = false;
  if (!isLogin) {
    isDefault = true;
  }
  return (
    <ScrollView>
      <UserTopArea
        userName={userName}
        _id={_id}
        headImg={headImg}
        isDefault={isDefault}></UserTopArea>
    </ScrollView>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
  user: state.user,
});

export default connect(stateToProps)(UserScreen);
