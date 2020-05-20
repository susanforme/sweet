import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SingleLineSettingAreaProps, OnPressDataInSetting} from '@/types';
import {SingleLineSettingAreaStyles as styles} from '@/style';
import {widthScale} from '@/style';

export function SingleLineSettingArea({
  iconName,
  size,
  style,
  textStyle,
  title,
  onPress,
}: SingleLineSettingAreaProps) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.area, style]}>
        {iconName ? <Icon name={iconName} size={size || 15}></Icon> : null}
        <Text style={[styles.text, textStyle]}>{title}</Text>
        <Icon name="right" size={size || 15} style={styles.right}></Icon>
      </View>
    </TouchableNativeFeedback>
  );
}

export default function getAreaByData(
  data: AreaData,
  style?: StyleProp<ViewStyle>,
  pressData?: OnPressDataInSetting,
) {
  const DataArea = data.map((v, index) => {
    if (pressData && index === pressData.index) {
      return (
        <SingleLineSettingArea
          key={index}
          onPress={pressData.onPress}
          title={v.title}
          iconName={v.iconName}></SingleLineSettingArea>
      );
    }
    return (
      <SingleLineSettingArea
        key={index}
        title={v.title}
        iconName={v.iconName}></SingleLineSettingArea>
    );
  });
  return <View style={[{marginTop: 10 * widthScale}, style]}>{DataArea}</View>;
}

type AreaData = {
  title: string;
  iconName: string;
}[];
