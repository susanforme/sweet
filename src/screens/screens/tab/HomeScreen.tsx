import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Modal} from 'beeshell/dist/components/Modal';
import {connect} from 'react-redux';
import {MyAppState} from '@/types';

function HomeScreen() {
  const curRef = useRef(null);
  return (
    <View>
      <Text>i am HomeScreen </Text>
      <Modal ref={curRef}>
        <Text>test</Text>
      </Modal>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLoading: state.isLoading,
  isLogin: state.isLogin,
});

export default connect(stateToProps)(HomeScreen);
