import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  MainStackList,
  MyAppState,
  ChatProps,
  ChatData,
  GetHistoryResponse,
  OnRefreshProps,
} from '@/types';
import RecordList from '@/components/chat/RecordList';
import BottomInput from '@/components/chat/BottomInput';
import {axios} from '@/api';
import {ActionTypes} from '@/store/actionTypes';

function Chat({user, record, syncLocalHistory}: ChatProps) {
  const route = useRoute<RouteProp<MainStackList, 'Chat'>>();
  const me = {userId: user._id, headImg: user.headImg, userName: user.userName};
  const you = route.params;
  const users = [me.userId, you.userId];
  const roomId = [me.userId, you.userId].sort().reduce((pre, cur) => pre + cur);
  const [localHistory] = useState(record(roomId));
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ChatData>([]);
  const [msg, setMsg] = useState('');
  useEffect(() => {
    if (Array.isArray(localHistory)) {
      const oldData: ChatData = JSON.parse(JSON.stringify(data));
      oldData.push(...localHistory);
      const newData = oldData.sort((a, b) => {
        return (
          new Date(a.createTime).getTime() - new Date(b.createTime).getTime()
        );
      });
      setData(newData);
    }
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#F4F5F9'}}>
      <FlatList
        data={data}
        renderItem={RecordList}
        refreshControl={
          !isRefreshed ? (
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                onRefresh({
                  setData,
                  setIsLoading,
                  roomId,
                  setIsRefreshed,
                  syncLocalHistory,
                  users,
                });
              }}
              colors={['#ffee00']}
            />
          ) : undefined
        }></FlatList>
      <BottomInput msg={msg} setMsg={setMsg}></BottomInput>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
  record(roomId: string) {
    return state.record[roomId];
  },
});

const dispatchToProps = (dispatch: Function) => ({
  syncLocalHistory(room: string, list: ChatData) {
    const action = {
      type: ActionTypes.SYNC_HISTORY_MESSAGE,
      data: {
        room,
        list,
      },
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(Chat);

function onRefresh({
  setIsLoading,
  setData,
  roomId,
  setIsRefreshed,
  syncLocalHistory,
  users,
}: OnRefreshProps) {
  setIsLoading(true);
  setTimeout(() => {
    axios
      .get<GetHistoryResponse>(`/chat/history/${users[0]}_${users[1]}`)
      .then((res) => {
        setIsRefreshed(true);
        if (Array.isArray(res.data.data.history)) {
          setData(res.data.data.history);
          syncLocalHistory(roomId, res.data.data.history);
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 0);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, 0);
}
