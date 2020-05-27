import React, {useState, useRef} from 'react';
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

export default function Release() {
  const [imgPath, setImgPath] = useState<Array<string>>([]);
  const [description, setDescription] = useState('');
  const bottomModalRef = useRef<BottomModal>(null);
  const [price, setPrice] = useState('');

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
              uri: `https://static-resource-1256396014.picnj.myqcloud.com/img/public/${v}/shui_ying`,
            }}
            style={styles.img}
          />
        </View>
      </TouchableNativeFeedback>
    );
  });
  return (
    <ScrollView style={styles.area}>
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
              setImgPath([...imgPath, imgUrl]);
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
            <Text style={styles.rightText}>¥ {price || 0}</Text>
            <Icon name="right" size={18 * widthScale} color="gray"></Icon>
          </View>
        </View>
      </TouchableNativeFeedback>
      <BottomModal
        ref={bottomModalRef}
        title=""
        titleContainer={() => null}
        leftCallback={() => {
          setPrice('');
        }}>
        <NumKeyBoard price={price} setPrice={setPrice} />
      </BottomModal>
    </ScrollView>
  );
}
