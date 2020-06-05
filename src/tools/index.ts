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

export function uploadImage(callback: (err: any, imgUrl: string) => any) {
  const options = {
    title: '选择图片',
    cancelButtonTitle: '取消',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '从相册选择',
    noData: true,
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
      axios
        .post('/upload/img', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          callback(null, res.data.data.src);
        })
        .catch((err) => {
          callback(err, '');
        });
    }
  });
}

/**
 * 根据0 1 2 3来发送请求
 * @param status 0 | 1 | 2 | 3
 * @param orderId string
 * @param userId string
 */
export async function changeOrderStatusByStatus(
  status: 0 | 1 | 2 | 3,
  orderId: string,
  userId: string,
) {
  let getData = () => axios.put(`/order/seller/delivery`, {orderId, userId});
  switch (status) {
    case 1:
      {
        getData = () => axios.put(`/order/buyer/receipt`, {orderId, userId});
      }
      break;
  }
  return await getData();
}
