import React from 'react';
import Main from '@/Main';
import {Provider} from 'react-redux';
import store, {persistor} from '@/store';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"></StatusBar>
        <Main></Main>
      </PersistGate>
    </Provider>
  );
}
