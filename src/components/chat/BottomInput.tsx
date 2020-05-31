import React from 'react';
import {TextInput, View, Text, TouchableNativeFeedback} from 'react-native';
import {BottomInputChatStyles as styles} from '@/style';
import {BottomInputChatProps} from '@/types';

// eslint-disable-next-line react/display-name
const BottomInput = React.forwardRef(
  ({msg, setMsg, onPress, onFoucus}: BottomInputChatProps, inputRef: any) => {
    return (
      <View style={styles.area}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={msg}
          onFocus={onFoucus}
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
  },
);

export default BottomInput;
