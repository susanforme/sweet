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

export default function Release() {
  const [imgPath, setImgPath] = useState<Array<string>>([]);
  const [description, setDescription] = useState('');
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
      <View></View>
    </ScrollView>
  );
}
