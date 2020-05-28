import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {ReleaseStyles as styles, widthScale} from '@/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {uploadImage} from '@/tools';
import {Tip} from 'beeshell/dist/components/Tip';
import {BottomModal} from 'beeshell/dist/components/BottomModal';
import NumKeyBoard from '@/components/release/NumKeyBoard';
import ReleaseHeader from '@/components/release/ReleaseHeader';
import {KindAreaGetResponse, MyAppState, MainStackList} from '@/types';
import BottomCategory from '@/components/release/BottomCategory';
import {connect} from 'react-redux';
import {axios} from '@/api';
import {useNavigation, NavigationProp} from '@react-navigation/native';

function Release({owner}: {owner: string}) {
  const [imgPath, setImgPath] = useState<Array<string>>([]);
  const [description, setDescription] = useState('');
  const bottomModalRef = React.createRef<BottomModal>();
  const categoryRef = React.createRef<BottomModal>();
  const [price, setPrice] = useState<Array<string>>([]);
  const [kind, setKind] = useState<KindAreaGetResponse['data'][0]>();
  const navigation = useNavigation<NavigationProp<MainStackList>>();
  const imgs = imgPath?.map((v, index) => {
    return (
      <TouchableNativeFeedback
        key={index}
        onPress={() => {
          uploadImage((err, imgUrl) => {
            if (err) {
              return Tip.show('上传失败', 500);
            }
            const newImgPath: Array<string> = JSON.parse(
              JSON.stringify(imgPath),
            );
            newImgPath.splice(index, 1, imgUrl);
            setImgPath(newImgPath);
          });
        }}>
        <View style={styles.box}>
          <Image
            source={{
              uri: v,
            }}
            style={styles.img}
          />
        </View>
      </TouchableNativeFeedback>
    );
  });
  return (
    <ScrollView style={styles.area}>
      <ReleaseHeader
        onPress={() => {
          if (imgPath.length === 0) {
            return Tip.show('请至少上传一张图片', 500);
          }
          if (!description) {
            return Tip.show('描述不能为空', 500);
          }
          if (!kind) {
            return Tip.show('请选择分类', 500);
          }
          if (!price.join('')) {
            return Tip.show('请填写价格', 500);
          }
          axios
            .post('/commodity/info', {
              owner,
              imgPath,
              kind: kind._id,
              price: Number(price.join('')),
              description,
            })
            .then(() => {
              Tip.show('发布成功', 500);
              setTimeout(() => {
                navigation.navigate('Tab', {
                  screen: 'Home',
                });
              }, 500);
            })
            .catch(() => {
              Tip.show('上传失败请检查网络', 500);
            });
        }}></ReleaseHeader>
      <TextInput
        placeholder="品牌型号,新旧程度,入手渠道,转手原因..."
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(text) => {
          setDescription(text);
        }}
        textAlignVertical="top"
        style={styles.input}></TextInput>
      <View style={styles.imageSelectArea}>
        {imgs}
        <TouchableNativeFeedback
          onPress={() => {
            uploadImage((err, imgUrl) => {
              if (err) {
                return Tip.show('上传失败', 500);
              }
              setImgPath([
                ...imgPath,
                `https://static-resource-1256396014.picnj.myqcloud.com/img/public/${imgUrl}/shui_ying`,
              ]);
            });
          }}>
          <View style={styles.box}>
            <Icon name="plus" size={60 * widthScale} color="#8D8D8D"></Icon>
          </View>
        </TouchableNativeFeedback>
      </View>
      <TouchableNativeFeedback
        onPress={() => {
          bottomModalRef.current?.open('');
        }}>
        <View style={styles.priceArea}>
          <View style={styles.priceCirle}>
            <Text style={styles.priceIcon}>¥</Text>
          </View>
          <Text style={styles.priceTip}>价格</Text>
          <View style={styles.right}>
            <Text style={styles.rightText}>¥ {price.join('') || 0}</Text>
            <Icon name="right" size={18 * widthScale} color="gray"></Icon>
          </View>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          categoryRef.current?.open('');
        }}>
        <View
          style={[
            styles.priceArea,
            {
              borderBottomColor: 'rgba(128, 128, 128, 0.2)',
              borderBottomWidth: 1 * widthScale,
              marginTop: 0,
            },
          ]}>
          <Icon name="bars" size={20 * widthScale}></Icon>
          <Text style={styles.priceTip}>分类</Text>
          <View style={styles.right}>
            <Text
              style={[styles.rightText, {color: 'black', fontWeight: '500'}]}>
              {kind?.kindName}
            </Text>
            <Icon name="right" size={18 * widthScale} color="gray"></Icon>
          </View>
        </View>
      </TouchableNativeFeedback>
      <NumKeyBoard price={price} setPrice={setPrice} ref={bottomModalRef} />
      <BottomCategory ref={categoryRef} setKind={setKind}></BottomCategory>
    </ScrollView>
  );
}

const stateToProps = (state: MyAppState) => ({
  owner: state.user._id,
});

export default connect(stateToProps)(Release);
