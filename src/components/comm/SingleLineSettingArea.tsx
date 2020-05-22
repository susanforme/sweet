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
  showRightLabel = true,
  showRightText = false,
  rightText = '',
  rightChild = null,
}: SingleLineSettingAreaProps) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.area, style]}>
        {iconName ? <Icon name={iconName} size={size || 15}></Icon> : null}
        <Text style={[styles.text, textStyle]}>{title}</Text>
        {showRightText ? (
          <Text style={styles.rightText}>{rightText}</Text>
        ) : null}
        {rightChild}
        {showRightLabel ? (
          <Icon name="right" size={size || 15} style={styles.right}></Icon>
        ) : null}
      </View>
    </TouchableNativeFeedback>
  );
}

export default function getAreaByData(
  data: AreaData,
  style?: StyleProp<ViewStyle>,
  pressData?: OnPressDataInSetting[],
) {
  const DataArea = data.map((v, index) => {
    if (pressData && pressData.find((v) => v.index === index)) {
      const pressIndex = pressData.findIndex((v) => v.index === index);
      return (
        <SingleLineSettingArea
          key={index}
          onPress={pressData[pressIndex].onPress}
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
