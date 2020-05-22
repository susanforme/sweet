import React from 'react';
import {View, Text} from 'react-native';
import {uploadImage} from '@/tools';

export function PersonalSettingScreen() {
  return (
    <View>
      <Text
        onPress={() => {
          uploadImage();
        }}>
        123
      </Text>
    </View>
  );
}
