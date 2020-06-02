import React from 'react';
import {View, Image, Text} from 'react-native';
import {DeatailContentTopStyles as styles} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {DetailContentTopProps} from '@/types';

export default function ContentTop({data}: DetailContentTopProps) {
  return (
    <>
      <View style={styles.head}>
        <Image
          style={styles.headImg}
          source={{uri: data?.user.headImg}}></Image>
        <View style={styles.headRight}>
          <View style={styles.userNameArea}>
            <Text style={styles.userName} numberOfLines={1}>
              {data?.user.userName}
            </Text>
            <View style={styles.iconArea}>
              <Icon name="pushpin" style={styles.userNameIcon}></Icon>
              <Text style={styles.iconText}>信用极好</Text>
            </View>
          </View>
          <Text style={styles.location}>发布于四川</Text>
        </View>
      </View>
      <View style={styles.priceArea}>
        <Text style={styles.priceLeft}>
          ¥ <Text style={styles.priceText}>{data?.price}</Text>
        </Text>
        <View style={styles.priceRight}>
          <Text style={styles.priceRightText}>包邮</Text>
        </View>
        {data?.isSale && <Text style={styles.saled}>已经卖出</Text>}
      </View>
      <View>
        <Text style={styles.description}>{data?.description}</Text>
      </View>
    </>
  );
}
