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
  BackChatResponse,
  SingleChatMsg,
} from '@/types';
import RecordList from '@/components/chat/RecordList';
import BottomInput from '@/components/chat/BottomInput';
import {axios} from '@/api';
import {ActionTypes} from '@/store/actionTypes';
import io from 'socket.io-client';

function Chat({user, record, syncLocalHistory, emitChatMsg}: ChatProps) {
  const route = useRoute<RouteProp<MainStackList, 'Chat'>>();
  const me = {userId: user._id, headImg: user.headImg, userName: user.userName};
  const you = route.params;
  const users = [me.userId, you.userId];
  const roomId = [me.userId, you.userId].sort().reduce((pre, cur) => pre + cur);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ChatData>([]);
  const [msg, setMsg] = useState('');
  const [socket] = useState(() => io('https://www.wdf5.com:5050'));
  socket.on('back', (res: BackChatResponse) => {
    emitChatMsg(roomId, res.data);
  });
  useEffect(() => {
    const localHistory = record[roomId];
    if (Array.isArray(localHistory)) {
      console.log('我是本地历史记录', localHistory);
      setData(localHistory);
    }
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#F4F5F9'}}>
      <FlatList
        data={data}
        renderItem={RecordList}
        keyExtractor={(item, index) => index.toString()}
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
      <BottomInput
        msg={msg}
        setMsg={setMsg}
        onPress={() => {
          const info = {
            send: me.userId,
            receive: you.userId,
            msg,
          };
          socket.emit('chat', info);
        }}></BottomInput>
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
  record: state.record,
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
  emitChatMsg(room: string, msg: SingleChatMsg) {
    const action = {
      type: ActionTypes.EMIT_CHAT_MESSAGE,
      data: {
        room,
        msg,
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
        console.log(res.data.data);
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
