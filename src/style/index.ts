import {Dimensions} from 'react-native';
//设计基准为宽411.43 高683.43

const {width} = Dimensions.get('window');

export const widthScale = width / 411.43;

export const padding = {
  paddingLeft: 15 * widthScale,
  paddingRight: 15 * widthScale,
};
