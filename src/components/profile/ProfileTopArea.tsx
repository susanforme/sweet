import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableNativeFeedback,
  Modal,
} from 'react-native';
import {MyAppState, ProfileTopAreaProps} from '@/types';
import {connect} from 'react-redux';
import {ProfileTopAreaStyles as styles, widthScale} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {getRandomNumber} from '@/tools';

function ProfileTopArea({user}: ProfileTopAreaProps) {
  const navigation = useNavigation();
  const [showImg, setShowImg] = useState(false);

  return (
    <ImageBackground source={{uri: user.headImg}} style={styles.bgImg}>
      <View style={styles.area}>
        <View style={styles.nav}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="left" color="white" size={30 * widthScale} />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.top}>
          <View style={styles.headImgView}>
            <TouchableNativeFeedback
              onPress={() => {
                setShowImg(true);
              }}>
              <Image source={{uri: user.headImg}} style={styles.headImg} />
            </TouchableNativeFeedback>
          </View>
          <Modal
            visible={showImg}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setShowImg(false)}>
            <ImageViewer
              imageUrls={[{url: user.headImg, props: {}}]}
              enableSwipeDown
              useNativeDriver
              menuContext={{saveToLocal: '保存到本地', cancel: '取消'}}
              onClick={(onCancel) => {
                if (onCancel) {
                  onCancel();
                }
              }}
              onCancel={() => {
                setShowImg(false);
              }}
            />
          </Modal>
          <View style={styles.user}>
            <Text style={styles.userId} numberOfLines={1}>
              {user._id}
            </Text>
            <Text style={styles.username} numberOfLines={1}>
              昵称: {user.userName}
            </Text>
            <View style={styles.auth}>
              <Text style={styles.authText}>未认证 </Text>
              <Icon name="right" color="white" />
            </View>
          </View>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('Setting', {
                screen: 'PersonalSettingScreen',
              });
            }}>
            <View style={styles.editProfile}>
              <Text style={styles.editText}>编辑资料</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.timeTip}>十分钟前来过甜虾</Text>
          <Text style={styles.timeTip}>四川</Text>
          <View style={styles.randomBottom}>
            <Text style={styles.randomText}>
              {getRandomNumber(0, 5000)} 超赞
            </Text>
            <Text style={styles.randomText}>
              {getRandomNumber(10, 50)} 关注
            </Text>
            <Text style={styles.randomText}>
              {getRandomNumber(0, 5000)} 粉丝
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const stateToProps = (state: MyAppState) => ({
  user: state.user,
});

export default connect(stateToProps)(ProfileTopArea);
