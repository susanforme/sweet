import React from 'react';
import {View, Text, TextInput, TouchableNativeFeedback} from 'react-native';
import {NumKeyboardStyles as styles, widthScale} from '@/style';
import {NumKeyboardProps} from '@/types';
import FontIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Feather';
import {BottomModal} from 'beeshell/dist/components/BottomModal';

// eslint-disable-next-line react/display-name
const NumKeyBoard = React.forwardRef(
  ({price, setPrice}: NumKeyboardProps, ref: any) => {
    const tableData = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0];
    const num = tableData.map((v) => {
      return (
        <TouchableNativeFeedback
          key={v}
          onPress={() => {
            if (price.length < 15) {
              const oldPrice: string[] = JSON.parse(JSON.stringify(price));
              if (oldPrice.includes('.') && v === '.') {
                return;
              }
              oldPrice.push(v.toString());
              setPrice(oldPrice);
            }
          }}>
          <View style={styles.numBox}>
            <Text style={styles.boxText}>{v}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    });
    return (
      <BottomModal
        ref={ref}
        title=""
        titleContainer={() => null}
        leftCallback={() => {
          setPrice(['']);
        }}>
        <View style={styles.area}>
          <View style={styles.showPrice}>
            <Text style={styles.tip}>价格</Text>
            <TextInput
              maxLength={15}
              style={styles.result}
              placeholder="¥ 0.00"
              editable={false}
              value={price.join('')}></TextInput>
          </View>
          <View style={styles.keyboard}>
            <View style={styles.num}>
              {num}
              <TouchableNativeFeedback
                onPress={() => {
                  ref.current.close();
                }}>
                <View style={styles.numBox}>
                  <FontIcon
                    name="keyboard-hide"
                    size={30 * widthScale}
                    color="gray"></FontIcon>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.right}>
              <TouchableNativeFeedback
                onPress={() => {
                  const oldPrice: string[] = JSON.parse(JSON.stringify(price));
                  oldPrice.pop();
                  setPrice(oldPrice);
                }}>
                <View style={styles.rightBox}>
                  <Icon name="delete" size={30 * widthScale}></Icon>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  ref.current.close();
                }}>
                <View style={[styles.rightBox, styles.determine]}>
                  <Text style={[styles.boxText, styles.determineText]}>
                    确定
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </BottomModal>
    );
  },
);

export default NumKeyBoard;
