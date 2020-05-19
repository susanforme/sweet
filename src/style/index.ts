import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
//设计基准为宽411.43 高683.43

const {width} = Dimensions.get('window');

export const widthScale = width / 411.43;

export const padding = {
  paddingLeft: 15 * widthScale,
  paddingRight: 15 * widthScale,
};

const heightAndLineHeight = {
  height: 50 * widthScale,
  lineHeight: 50 * widthScale,
};

/**
 * LoginBottom 的样式
 */
export const LoginBottomStyles = StyleSheet.create({
  bottom: {
    marginTop: 20 * widthScale,
  },
  right: {
    position: 'absolute',
    right: 15 * widthScale,
  },
  text: {
    fontSize: 15 * widthScale,
    color: 'gray',
  },
});

/**
 * LoginModule 的样式
 */
export const LoginModuleStyles = StyleSheet.create({
  module: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60 * widthScale,
  },
  image: {
    width: 70 * widthScale,
    height: 70 * widthScale,
  },
  inputStyle: {
    backgroundColor: 'white',
    textAlignVertical: 'bottom',
    height: 45 * widthScale,
  },
  form: {
    width: '100%',
  },
  item: {
    borderBottomColor: '#F79286',
    borderBottomWidth: 1,
    paddingTop: 20 * widthScale,
    paddingBottom: 0,
  },
  icon: {
    marginLeft: -10 * widthScale,
    marginRight: 10 * widthScale,
  },
  button: {
    borderRadius: 50 * widthScale,
    backgroundColor: 'rgba(253, 159, 131, 0.781)',
    marginTop: 40 * widthScale,
  },
});

/**
 * UserTopArea 的样式
 */
export const UserTopAreaStyles = StyleSheet.create({
  topArea: {
    height: 50 * widthScale,
    backgroundColor: '#ffee00',
    ...padding,
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: 50 * widthScale,
    borderRadius: 10 * widthScale,
    height: 50 * widthScale,
  },
  userName: {
    ...heightAndLineHeight,
    paddingLeft: 10 * widthScale,
    fontSize: 20 * widthScale,
    fontWeight: '700',
    width: 200 * widthScale,
  },
  personalFather: {
    ...heightAndLineHeight,
    position: 'absolute',
    right: 15 * widthScale,
    flex: 1,
    justifyContent: 'center',
  },
  personal: {
    backgroundColor: 'white',
    borderRadius: 50 * widthScale,
    height: 15 * widthScale,
    paddingLeft: 35 * widthScale,
    paddingRight: 35 * widthScale,
  },
});
