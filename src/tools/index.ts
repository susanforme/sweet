import ImagePicker from 'react-native-image-picker';
import {axios} from '@/api';

/**
 * 生成随机数
 * @param low 下边界
 * @param high 上边界
 */
export function getRandomNumber(low: number, high: number) {
  return Math.round(Math.random() * (high - low) + low);
}

/**
 * 图片上传模块
 * @parms callback callback的参数是一个表单
 */

export function uploadImage() {
  const options = {
    title: '选择图片',
    cancelButtonTitle: '取消',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '从相册选择',
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      let formData = new FormData();
      const file = {
        uri: response.uri,
        type: response.type,
        name: response.fileName || 'default.jpg',
      };
      formData.append('files', file);
      console.log(formData);
      axios
        .post('/upload/img', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}
