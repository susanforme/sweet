import React from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {useRoute, RouteProp} from '@react-navigation/native';
import {MainStackList, MyAppState, ChatProps} from '@/types';

function Chat({user}: ChatProps) {
  const route = useRoute<RouteProp<MainStackList, 'Chat'>>();
  console.log(route.params);
  const me = {userId: user._id, headImg: user.headImg, userName: user.userName};
  const you = route.params;
  return (
    <View>
      <ScrollView></ScrollView>
      <View></View>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
});

export default connect(stateToProps)(Chat);
