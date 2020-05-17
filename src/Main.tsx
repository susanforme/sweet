import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Chat from '@/screens/Chat';
import Login from '@/screens/Login';
import Profile from '@/screens/Profile';
import Release from '@/screens/Release';
import Search from '@/screens/Search';
import Setting from '@/screens/Setting';
import Tabstack from '@/screens/Tabstack';
import {connect} from 'react-redux';
import {MyAppState} from '@/types';
import store from '@/store';
import {verifyAccount} from '@/store/actions';

const MainStack = createStackNavigator<MainStackList>();

function Main() {
  useEffect(() => {
    store.dispatch(verifyAccount());
  }, []);
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Tab">
        <MainStack.Screen
          name="Tab"
          component={Tabstack}
          options={{header: () => null}}></MainStack.Screen>
        <MainStack.Screen name="Chat" component={Chat}></MainStack.Screen>
        <MainStack.Screen name="Login" component={Login}></MainStack.Screen>
        <MainStack.Screen name="Profile" component={Profile}></MainStack.Screen>
        <MainStack.Screen name="Release" component={Release}></MainStack.Screen>
        <MainStack.Screen name="Search" component={Search}></MainStack.Screen>
        <MainStack.Screen name="Setting" component={Setting}></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
  isLoading: state.isLoading,
});

export default connect(stateToProps)(Main);

type MainStackList = {
  Tab: undefined;
  Chat: undefined;
  Login: undefined;
  Profile: undefined;
  Release: undefined;
  Search: undefined;
  Setting: undefined;
};
