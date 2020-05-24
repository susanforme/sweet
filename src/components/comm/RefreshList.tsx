import React from 'react';
import {FlatList, Text, RefreshControl} from 'react-native';
import {RefreshListProps, RecommendGetResponse} from '@/types';

export default function RefreshList({
  onRefresh,
  data,
  isRefresh,
}: RefreshListProps<RecommendGetResponse['data']>) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      refreshControl={
        <RefreshControl
          refreshing={isRefresh}
          onRefresh={onRefresh}
          colors={['#ffee00']}
        />
      }
      renderItem={({item}) =>
        item._id ? <Text>{item.description}</Text> : null
      }></FlatList>
  );
}
