import React, {useRef} from 'react';
import {SingleLineSettingArea} from '@/components/comm/SingleLineSettingArea';
import {DeleteAccountScreenStyles as styles} from '@/style';
import {Dialog} from 'beeshell/dist/components/Dialog';
import {View} from 'react-native';

export default function DeleteAccountScreen() {
  const dialogRef = useRef<Dialog>(null);
  return (
    <View>
      <SingleLineSettingArea
        iconName=""
        size={20}
        style={styles.area}
        onPress={() => {
          dialogRef.current?.open();
        }}
        title="注销甜虾账号"></SingleLineSettingArea>
      <Dialog
        ref={dialogRef}
        title="注销账号"
        confirmLabelTextStyle={{color: 'red'}}
        cancelLabelTextStyle={{color: 'green'}}
        confirmCallback={() => {}}
        bodyText="请注意,一经注销无法撤回!"></Dialog>
    </View>
  );
}
