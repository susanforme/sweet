import React, {useRef} from 'react';
import {
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {RefreshListProps, RecommendGetResponse, MainStackList} from '@/types';
import {RefreshListStyles as styles, widthScale} from '@/style';
import {getRandomNumber} from '@/tools';
import {useNavigation, NavigationProp} from '@react-navigation/native';

export default function RefreshList({
  onRefresh,
  data,
  isRefresh,
  ListHeaderComponent,
  isToTop,
  onScroll,
  enabelRefresh = true,
}: RefreshListProps<RecommendGetResponse['data']>) {
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProp<MainStackList>>();
  if (isToTop) {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: 0,
      viewOffset: 380 * widthScale,
    });
  }
  return (
    <FlatList
      style={styles.father}
      data={data}
      getItemLayout={(data, index) => ({
        length: styles.box.height,
        offset: styles.box.height * index,
        index,
      })}
      onScroll={onScroll}
      ref={flatListRef}
      keyExtractor={(item) => item._id}
      ListHeaderComponent={ListHeaderComponent}
      scrollsToTop={true}
      ListEmptyComponent={() => renderListEmptyComponent()}
      refreshControl={
        enabelRefresh ? (
          <RefreshControl
            refreshing={Boolean(isRefresh)}
            onRefresh={onRefresh}
            colors={['#ffee00']}
          />
        ) : undefined
      }
      numColumns={2}
      renderItem={({item}) =>
        item._id ? renderItem(item, navigation) : null
      }></FlatList>
  );
}
function renderItem(
  item: RecommendGetResponse['data'][0],
  navigation: NavigationProp<MainStackList>,
) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Detail', {
          commodityId: item._id,
        });
      }}>
      <View style={[styles.box]}>
        <Image source={{uri: item.imgPath[0]}} style={[styles.img]}></Image>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
        <View style={styles.priceList}>
          <Text style={styles.price}>￥{item.price}</Text>
          <Text style={styles.priceRight}>{getRandomNumber(1, 30)}想要</Text>
        </View>
        <View style={styles.head}>
          <Image
            source={{uri: item.user.headImg}}
            style={styles.headImg}></Image>
          <Text numberOfLines={1}>{item.user.userName}</Text>
          <Text style={styles.headRight}>超级卖家</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function renderListEmptyComponent() {
  return (
    <View style={styles.empty}>
      <ActivityIndicator
        style={styles.loading}
        color="#ffee00"
        size={40 * widthScale}
      />
    </View>
  );
}
