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
import Classificat from '@/screens/Classificat';
import Detail from '@/screens/Detail';
import OrderStack from '@/screens/OrderStack';
import AssetsMessageScreen from './screens/AssetsMessage';
import {Tip} from 'beeshell/dist/components/Tip';

const MainStack = createStackNavigator<MainStackList>();

function Main({isLogin, isLoading, err}: MainProps) {
  const paddingTop = StatusBar.currentHeight || 30;
  useEffect(() => {
    store.dispatch(verifyAccount());
    if (!isLogin && err) {
      Tip.show('网络错误', 1000);
    }
  }, []);
  if (!isLoading) {
    SplashScreen.hide();
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Tab">
        <MainStack.Screen
          name="Tab"
          component={Tabstack}
          options={{header: () => null}}></MainStack.Screen>
        <MainStack.Screen
          name="Chat"
          component={Chat}
          options={({route}) => ({
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.8, 'white'),
            title: route.params.userName,
          })}></MainStack.Screen>
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
            header: () => null,
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Release"
          component={Release}
          options={{
            title: '发布',
            header: () => null,
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
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.7, 'white'),
            header: () => null,
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Classificat"
          component={Classificat}
          options={({route}) => ({
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.7, 'white'),
            headerTitle: route.params.kindName,
          })}></MainStack.Screen>
        <MainStack.Screen
          name="Detail"
          component={Detail}
          options={{
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.7, 'white'),
            title: '',
          }}></MainStack.Screen>
        <MainStack.Screen
          name="Order"
          component={OrderStack}
          options={(route) => ({
            title: route.route.params.title,
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.7, 'white'),
          })}></MainStack.Screen>
        <MainStack.Screen
          name="AssetsMessage"
          component={AssetsMessageScreen}
          options={(route) => ({
            title: route.route.params.title,
            ...getDefaultHeaderStyle(80 * widthScale, paddingTop, 0.7, 'white'),
          })}></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const stateToProps = (state: MyAppState) => ({
  isLogin: state.isLogin,
  isLoading: state.isLoading,
  err: state.err.verifyAccount,
});

export default connect(stateToProps)(Main);
