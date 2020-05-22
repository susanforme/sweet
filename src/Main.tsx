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
import {MyAppState, MainProps, MainStackList} from '@/types';
import store from '@/store';
import {verifyAccount} from '@/store/actions';
import SplashScreen from 'react-native-splash-screen';
import {getDefaultHeaderStyle} from '@/style/header';
import {widthScale} from './style';
import {StatusBar} from 'react-native';

const MainStack = createStackNavigator<MainStackList>();

function Main({isLogin, isLoading}: MainProps) {
  const paddingTop = StatusBar.currentHeight || 30;
  useEffect(() => {
    store.dispatch(verifyAccount());
  }, []);
  if (!isLoading) {
    SplashScreen.hide();
  }
  console.log(isLogin, isLoading);
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Tab">
        <MainStack.Screen
          name="Tab"
          component={Tabstack}
          options={{header: () => null}}></MainStack.Screen>
        <MainStack.Screen name="Chat" component={Chat}></MainStack.Screen>
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.5, 'white'),
            title: '',
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Profile"
          component={Profile}
          options={{
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop),
            title: '个人主页',
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Release"
          component={Release}
          options={{
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop),
            title: '发布',
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Search"
          component={Search}
          options={{
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop),
            header: () => null,
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Setting"
          component={Setting}
          options={{
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.6, 'white'),
            header: () => null,
          }}></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
  isLoading: state.isLoading,
});

export default connect(stateToProps)(Main);
