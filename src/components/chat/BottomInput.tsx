import React from 'react';
import {TextInput, View, Text, TouchableNativeFeedback} from 'react-native';
import {BottomInputChatStyles as styles} from '@/style';
import {BottomInputChatProps} from '@/types';

export default function BottomInput({
  msg,
  setMsg,
  onPress,
}: BottomInputChatProps) {
  return (
    <View style={styles.area}>
      <TextInput
        style={styles.input}
        value={msg}
        blurOnSubmit
        returnKeyType="send"
        onSubmitEditing={onPress}
        onChangeText={(text) => {
          setMsg(text);
        }}></TextInput>
      <TouchableNativeFeedback onPress={onPress}>
        <Text style={styles.btn}>发送</Text>
      </TouchableNativeFeedback>
    </View>
  );
}
