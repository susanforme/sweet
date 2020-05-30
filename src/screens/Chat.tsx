import React, {useState} from 'react';
import {View, FlatList, RefreshControl, TextInput} from 'react-native';
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
} from '@/types';
import RecordList from '@/components/chat/RecordList';
import BottomInput from '@/components/chat/BottomInput';
import {axios} from '@/api';
import io from 'socket.io-client';
import Loading from '@/components/comm/Loading';
import {height} from '@/style';

function Chat({user}: ChatProps) {
  const route = useRoute<RouteProp<MainStackList, 'Chat'>>();
  const me = {userId: user._id, headImg: user.headImg, userName: user.userName};
  const you = route.params;
  const users = [me.userId, you.userId];
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ChatData>([]);
  const [msg, setMsg] = useState('');
  const inputRef = React.createRef<TextInput>();
  const flatRef = React.createRef<FlatList>();
  const [socket] = useState(() => io('https://www.wdf5.com:5050'));
  socket.connect();
  socket.on('back', (res: BackChatResponse) => {
    if (res.data.send === you.userId) {
      setData([res.data, ...data]);
    }
  });
  return (
    <View style={{flex: 1, backgroundColor: '#F4F5F9'}}>
      <FlatList
        data={data}
        initialNumToRender={10}
        removeClippedSubviews
        windowSize={height}
        ref={flatRef}
        inverted
        renderItem={({item, index}) => {
          let itemData = item;
          if (
            getTime(data[index + 1]?.createTime) === getTime(item.createTime) &&
            getTime(data[index - 1]?.createTime) === getTime(item.createTime)
          ) {
            itemData = {...item, createTime: ''};
          }
          return <RecordList data={itemData} me={me} you={you} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          !isRefreshed ? (
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                onRefresh({
                  setIsLoading,
                  setData,
                  setIsRefreshed,
                  users,
                });
              }}
              colors={['#ffee00']}
            />
          ) : undefined
        }></FlatList>
      <BottomInput
        msg={msg}
        ref={inputRef}
        setMsg={setMsg}
        onFoucus={() => {}}
        onPress={() => {
          const info = {
            send: me.userId,
            receive: you.userId,
            msg,
          };
          setData([
            {...info, createTime: new Date().toLocaleString()},
            ...data,
          ]);
          socket.emit('chat', info);
          inputRef.current?.blur();
          inputRef.current?.clear();
        }}></BottomInput>
      {isLoading ? <Loading title="同步中" /> : null}
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
});

export default connect(stateToProps)(Chat);

function onRefresh({
  setIsLoading,
  setData,
  setIsRefreshed,
  users,
}: OnRefreshProps) {
  setIsLoading(true);
  setTimeout(() => {
    axios
      .get<GetHistoryResponse>(`/chat/history/${users[0]}_${users[1]}`)
      .then((res) => {
        setIsRefreshed(true);
        if (Array.isArray(res.data.data.history)) {
          setData(res.data.data.history.reverse());
        }

        setTimeout(() => {
          setIsLoading(false);
        }, (100 * res.data.data.history?.length) / 20);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, 0);
}

function getTime(time: string) {
  const date = new Date(time);
  return `${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
}
