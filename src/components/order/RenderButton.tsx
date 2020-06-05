import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {OrderRenderButtonStyles as styles} from '@/style';
import {OrderRenderButton, MyAppState} from '@/types';
import {connect} from 'react-redux';
import {ActionTypes} from '@/store/actionTypes';
import {changeOrderStatusByStatus} from '@/tools';
import {Tip} from 'beeshell/dist/components/Tip';
import {BottomModal} from 'beeshell/dist/components/BottomModal';
import {Button} from 'beeshell/dist/components/Button';

function RenderButton({
  isBuy,
  status,
  orderId,
  user,
  setRefresh,
  forceRefresh,
  setIsLoading,
}: OrderRenderButton) {
  //如果为3已经完成
  //为2需要评论,弹出底部栏目
  const tips = [
    ['确认发货', '物流中', '买家未评价', '已完成'],
    ['卖家发货中', '确认收货', '发表评价', '已完成'],
  ];
  const bottomRef = React.createRef<BottomModal>();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isBuy !== Boolean(status)) {
          return;
        }
        if (status === 0 || status === 1) {
          setIsLoading(true);
          return changeOrderStatusByStatus(status, orderId || 's', user._id)
            .then(() => {
              setRefresh(!forceRefresh);
            })
            .catch((err) => {
              console.log(err);
              Tip.show('网络错误', 300);
            });
        } else if (status === 2) {
          bottomRef.current?.open('');
        }
      }}>
      <View style={styles.area}>
        <Text
          style={[
            styles.commText,
            isBuy === Boolean(status) ? styles.operate : styles.nonOperate,
          ]}>
          {tips[Number(isBuy)][status]}
        </Text>
        <BottomModal
          ref={bottomRef}
          title=""
          leftLabelText=""
          rightLabelText="">
          <KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <Text>评价: </Text>
              <TextInput />
            </KeyboardAvoidingView>
            <Button>提交评价</Button>
          </KeyboardAvoidingView>
        </BottomModal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const stateToProps = (state: MyAppState) => ({
  forceRefresh: state.forceRefresh,
  user: state.user,
});

const dispatchToProps = (dispatch: Function) => ({
  setRefresh(status: boolean) {
    const action = {
      type: ActionTypes.ENABLE_FORCE_REFRESH,
      data: {
        status,
      },
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(RenderButton);
