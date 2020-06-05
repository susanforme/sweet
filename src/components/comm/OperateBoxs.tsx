import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {OperateBoxs} from '@/types';
import {OperateBoxsStyles as styles} from '@/style';
import RenderButton from '@/components/order/RenderButton';

export default function OpreateBoxs({
  data,
  isBuy,
  status,
  setIsLoading,
}: OperateBoxs) {
  return (
    <View style={styles.father}>
      <TouchableNativeFeedback>
        <View style={styles.area}>
          <Image
            source={{uri: data?.commodity.imgPath[0]}}
            style={styles.img}
          />
          <View style={styles.right}>
            <Text numberOfLines={2} style={styles.description}>
              {data?.commodity.description}
            </Text>
            <Text style={styles.author}>
              {isBuy
                ? `发布者: ${data?.sellerId.userName}`
                : `购买者: ${data?.buyerId.userName}`}
            </Text>
            <Text style={styles.price}>
              ¥ {data?.commodity.price.toFixed(2)}
            </Text>
            <RenderButton
              isBuy={isBuy}
              orderId={data?._id}
              status={status}
              setIsLoading={setIsLoading}
            />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
