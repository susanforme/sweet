import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, TextInput} from 'react-native';
import {OrderRenderButtonStyles as styles, height} from '@/style';
import {OrderRenderButton, MyAppState} from '@/types';
import {connect} from 'react-redux';
import {ActionTypes} from '@/store/actionTypes';
import {changeOrderStatusByStatus} from '@/tools';
import {Tip} from 'beeshell/dist/components/Tip';
import {BottomModal} from 'beeshell/dist/components/BottomModal';
import {Button} from 'beeshell/dist/components/Button';
import {useKeyBoardHeight} from '@/hook';
import {axios} from '@/api';

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
  const [isShow, setIsShow] = useState(false);
  const [evaluate, setEvaluate] = useState('');
  const keyboardHeight = useKeyBoardHeight();
  const sendEvaluate = () => {
    if (!evaluate) {
      return Tip.show('不能为空', 300);
    }
    bottomRef.current?.close();
    setIsLoading(true);
    setIsShow(false);
    setTimeout(() => {
      axios
        .post('/order/buyer/evaluate', {
          orderId,
          userId: user._id,
          evaluate,
        })
        .then(() => {
          setRefresh(!forceRefresh);
        })
        .catch(() => Tip.show('网络错误', 300));
    }, 0);
  };
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
            isBuy === Boolean(status) && status !== 3
              ? styles.operate
              : styles.nonOperate,
          ]}>
          {tips[Number(isBuy)][status]}
        </Text>
        <BottomModal
          ref={bottomRef}
          title=""
          onClose={() => {
            setIsShow(false);
          }}
          leftLabelText=""
          rightLabelText="">
          <View
            style={[
              styles.bottom,
              isShow && {height: 0.22 * height + keyboardHeight},
            ]}>
            <View style={styles.bottomLine}>
              <Text style={styles.bottomTips}>评价: </Text>
              <TextInput
                placeholder="请输入对该商品的评价,最大字数30"
                onFocus={() => {
                  setIsShow(true);
                }}
                blurOnSubmit
                maxLength={30}
                style={styles.bottomInput}
                onBlur={() => {
                  setIsShow(false);
                }}
                value={evaluate}
                onChangeText={(text) => {
                  setEvaluate(text);
                }}
                onSubmitEditing={() => {
                  sendEvaluate();
                }}
              />
            </View>
            <View style={styles.btnFather}>
              <Button
                textStyle={styles.bottomBtnText}
                style={styles.bottomBtn}
                onPress={() => {
                  sendEvaluate();
                }}>
                提交评价
              </Button>
            </View>
          </View>
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
