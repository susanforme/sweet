import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {SingleLineSettingArea} from '@/components/comm/SingleLineSettingArea';
import {connect} from 'react-redux';
import {MyAppState, PersonalSettingScreenProps} from '@/types';
import {PersonalSettingScreenStyles as styles} from '@/style';
import {ActionTypes} from '@/store/actionTypes';
import {uploadImage} from '@/tools';
import {Tip} from 'beeshell/dist/components/Tip';
import {axios} from '@/api';
import Loading from '@/components/comm/Loading';

function PersonalSettingScreen({
  user,
  changeHeadImg,
}: PersonalSettingScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ScrollView style={styles.area}>
      <Text style={styles.tip}>基本信息</Text>
      <Loading show={isLoading} title="上传中..."></Loading>
      <View style={styles.content}>
        <SingleLineSettingArea
          title="头像"
          onPress={() => {
            uploadImage((err, imgUrl) => {
              setIsLoading(true);
              if (err) {
                setIsLoading(false);
                setTimeout(() => {
                  Tip.show('错误', 1000);
                }, 0);
                return;
              }
              const headImg = `https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/img/public/${imgUrl}`;
              axios
                .put('/user/headimg', {
                  userId: user._id,
                  headImg: `${headImg}`,
                })
                .then(() => {
                  setIsLoading(false);
                  changeHeadImg(headImg);
                })
                .catch(() => {
                  setIsLoading(false);
                  setTimeout(() => {
                    Tip.show('错误', 1000);
                  }, 0);
                  return;
                });
            });
          }}
          rightChild={
            <Image source={{uri: user.headImg}} style={styles.image}></Image>
          }
          style={[styles.box, styles.first]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="会员名"
          showRightText={true}
          rightText={user._id}
          style={styles.box}
          showRightLabel={false}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="用户名"
          showRightText={true}
          rightText={user.userName}
          style={[styles.box]}
          showRightLabel={false}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="性别"
          style={[styles.box]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="生日"
          style={[styles.box]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="常住"
          style={[styles.box]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="简介"
          style={[styles.box]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="行业"
          style={[styles.box]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="职位名称"
          style={[styles.box]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="院校名称"
          style={[styles.box]}></SingleLineSettingArea>
        <SingleLineSettingArea
          title="喜欢的"
          style={[styles.box, styles.last]}></SingleLineSettingArea>
      </View>
    </ScrollView>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
});
const dispatchToProps = (dispatch: Function) => ({
  changeHeadImg(headImg: string) {
    const action = {
      type: ActionTypes.CHANGE_USER_HEAD_IMG,
      data: {headImg},
    };
    dispatch(action);
  },
});

export default connect(stateToProps, dispatchToProps)(PersonalSettingScreen);
