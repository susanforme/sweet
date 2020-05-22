import React from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SearchInputProps} from '@/types';
import {SearchInputPropsStyles as styles} from '@/style';

export default function SearchInput({
  value,
  onChangeText,
  style,
  placeholder,
  iconSize,
  onPress,
  editable = true,
}: SearchInputProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.area, style]}>
        <Icon name="search1" size={iconSize || 20}></Icon>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          maxLength={30}
          editable={editable}
          placeholder={placeholder}></TextInput>
      </View>
    </TouchableWithoutFeedback>
  );
}
