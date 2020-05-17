import React from 'react';
import Main from '@/Main';
import {Provider} from 'react-redux';
import store from '@/store';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FEEE1B" barStyle="dark-content"></StatusBar>
      <Main></Main>
    </Provider>
  );
}
