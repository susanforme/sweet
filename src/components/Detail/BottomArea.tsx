import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {DetailBottomAreaStyles as styles, widthScale} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'beeshell/dist/components/Button';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainStackList, DetailBottomAreaProps} from '@/types';

export default function BottomArea({userId, userName}: DetailBottomAreaProps) {
  const [isInput, setIsInput] = useState(false);
  const navigation = useNavigation<NavigationProp<MainStackList>>();
  const show = (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.icon}>
          <Icon name="hearto" size={20 * widthScale} color="gray"></Icon>
          <Text style={styles.text}>喜欢</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.icon}>
          <Icon name="message1" size={20 * widthScale} color="gray"></Icon>
          <Text style={styles.text}>留言</Text>
        </View>
      </TouchableWithoutFeedback>
      <Button
        style={styles.right}
        onPress={() => {
          navigation.navigate('Chat', {
            userId: userId,
            userName: userName,
          });
        }}>
        我想要
      </Button>
    </>
  );
  return <View style={styles.area}>{isInput ? null : show}</View>;
}
