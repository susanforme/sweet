import React from 'react';
import {NavigationBar} from 'beeshell/dist/components/NavigationBar';
import {StatusBar, View} from 'react-native';

export default function SettingHeader(header: string) {
  const height = StatusBar.currentHeight || 30;

  return (
    <NavigationBar
      backLabelText=""
      backLabel={<View></View>}
      style={{
        height: height * 2.8,
        backgroundColor: '#feef00',
        paddingTop: height,
      }}
      titleStyle={{fontSize: height * 0.8}}
      title={header}></NavigationBar>
  );
}
