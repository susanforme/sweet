import React, {useState, useRef} from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';
import {SearchHeaderStyles as styles, widthScale} from '@/style/index';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SearchHeaderProps} from '@/types';

export default function Header({
  search,
  isSearching,
  setIsSearching,
}: SearchHeaderProps) {
  const height = StatusBar.currentHeight || 30;
  const navigaiton = useNavigation();
  const [content, setContent] = useState('');
  const inputRef = useRef<TextInput>(null);
  return (
    <View style={[{paddingTop: height}, styles.header]}>
      <Icon
        name="left"
        style={styles.leftIcon}
        size={25 * widthScale}
        onPress={() => {
          navigaiton.goBack();
        }}></Icon>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>宝贝</Text>
        <TextInput
          autoFocus
          placeholder="搜索你喜欢的宝贝"
          onFocus={() => {
            if (!isSearching) {
              inputRef.current?.focus();
              setIsSearching(true);
            }
          }}
          value={content}
          onChangeText={(text) => {
            setContent(text);
          }}
          returnKeyType="search"
          clearButtonMode="always"
          onSubmitEditing={() => {
            inputRef.current?.blur();
            setIsSearching(false);
            setContent('');
            search(content);
          }}
          ref={inputRef}
          style={styles.input}></TextInput>
      </View>
      {isSearching ? (
        <Text
          onPress={() => {
            inputRef.current?.blur();
            setIsSearching(false);
            setContent('');
            search(content);
          }}
          style={styles.btn}>
          搜索
        </Text>
      ) : null}
    </View>
  );
}
