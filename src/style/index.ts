import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
//设计基准为宽411.43 高683.43

const {width, height} = Dimensions.get('window');

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

/**
 * UserInfluenceArea 的样式
 */
export const UserInfluenceAreaStyles = StyleSheet.create({
  influence: {
    backgroundColor: '#ffee00',
    paddingTop: 15 * widthScale,
    paddingBottom: 20 * widthScale,
    ...padding,
    display: 'flex',
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    fontWeight: '700',
    fontSize: 18 * widthScale,
  },
  title: {
    fontSize: 13 * widthScale,
    color: 'rgba(48, 47, 47, 0.808)',
  },
});

/**
 * UserFeatureArea 的样式
 */
export const UserFeatureAreaStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    marginLeft: 15 * widthScale,
    marginRight: 15 * widthScale,
    padding: 15 * widthScale,
    borderRadius: 15 * widthScale,
    paddingTop: 8 * widthScale,
    marginTop: 15 * widthScale,
  },
  title: {
    fontSize: 16 * widthScale,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 16 * widthScale,
    paddingBottom: 16 * widthScale,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    flexBasis: '25%',
    marginTop: 5 * widthScale,
  },
  img: {
    width: 30 * widthScale,
    height: 30 * widthScale,
  },
  count: {
    marginTop: 5 * widthScale,
    fontSize: 13 * widthScale,
    color: 'rgba(100, 98, 98, 0.808)',
  },
});

/**
 * 设置页面单行样式
 */

export const SingleLineSettingAreaStyles = StyleSheet.create({
  area: {
    display: 'flex',
    flexDirection: 'row',
    ...padding,
    backgroundColor: 'white',
    height: 55 * widthScale,
    alignItems: 'center',
    borderBottomColor: 'rgba(196, 196, 196, 0.192)',
    borderBottomWidth: 0.5 * widthScale,
  },
  right: {
    position: 'absolute',
    right: 15 * widthScale,
    color: 'gray',
  },
  text: {
    fontSize: 15 * widthScale,
    marginLeft: 8 * widthScale,
  },
  rightText: {
    position: 'absolute',
    right: 40 * widthScale,
    color: 'gray',
    overflow: 'hidden',
  },
});

/**
 * 关于 页面样式
 */

export const AboutStyles = StyleSheet.create({
  about: {
    flex: 1,
  },
  area: {
    alignItems: 'center',
    display: 'flex',
  },
  img: {
    marginTop: 15 * widthScale,
    width: 90 * widthScale,
    height: 90 * widthScale,
  },
  tip: {
    marginTop: 10 * widthScale,
    fontSize: 14 * widthScale,
  },
  version: {
    marginTop: 10 * widthScale,
    fontSize: 13 * widthScale,
    color: 'gray',
    marginBottom: 20 * widthScale,
  },
  bottom: {
    position: 'absolute',
    bottom: 20 * widthScale,
    width: 200 * widthScale,
    textAlign: 'center',
    left: width / 2 - 100 * widthScale,
  },
  line: {
    height: 50 * widthScale,
  },
  lineMargin: {
    marginTop: 20 * widthScale,
  },
});

/**
 * 公用loading组件样式
 */
export const LoadingStyle = StyleSheet.create({
  view: {
    position: 'absolute',
    width: 100 * widthScale,
    height: 90 * widthScale,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5 * widthScale,
    left: width / 2 - 50 * widthScale,
    top: height / 2 - 90 * widthScale,
    zIndex: 10,
  },
  anima: {},
  text: {
    marginTop: 10 * widthScale,
    color: 'white',
  },
});

/**
 * location 组件
 */
export const LocationScreenStyles = StyleSheet.create({
  area: {
    flex: 1,
  },
  imgFather: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  img: {
    width: 120 * widthScale,
    height: 120 * widthScale,
    marginTop: 60 * widthScale,
  },
  text: {
    marginTop: 10 * widthScale,
    textAlign: 'center',
    fontSize: 16 * widthScale,
  },
  btn: {
    marginLeft: '5%',
    marginRight: '5%',
    position: 'absolute',
    bottom: 10 * widthScale,
    width: '90%',
    borderRadius: 20 * widthScale,
  },
});

/**
 * 添加地址
 */
export const AddLocationScreenStyles = StyleSheet.create({
  area: {
    padding: 10 * widthScale,
    flex: 1,
  },
  content: {
    borderRadius: 10 * widthScale,
    backgroundColor: 'white',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...padding,
    borderBottomColor: 'rgba(128, 128, 128, 0.308)',
    borderBottomWidth: 0.5,
  },
  btn: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
    borderRadius: 30 * widthScale,
    height: 40 * widthScale,
    marginTop: 12 * widthScale,
  },
  title: {
    width: '20%',
  },
  input: {
    width: '76%',
  },
  bottom: {
    borderBottomWidth: 0,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10 * widthScale,
    height: 50 * widthScale,
    marginBottom: 25 * widthScale,
  },
  switch: {
    position: 'absolute',
    right: '5%',
    width: 55 * widthScale,
    height: 27 * widthScale,
  },
  defaultLocation: {
    width: '70%',
  },
});

/**
 * 单个地址盒子样式
 */
export const LocationInformationBoxStyles = StyleSheet.create({
  anima: {
    borderRadius: 10 * widthScale,
  },
  box: {
    backgroundColor: 'white',
    margin: 10 * widthScale,
    borderRadius: 10 * widthScale,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    paddingTop: 10 * widthScale,
    paddingBottom: 10 * widthScale,
    display: 'flex',
  },
  content: {
    width: '80%',
    marginLeft: '2%',
    height: '100%',
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    height: 25 * widthScale,
  },
  area: {
    overflow: 'hidden',
    fontSize: 13 * widthScale,
    color: 'gray',
  },
  name: {
    marginRight: 5 * widthScale,
  },
  phoneNum: {
    marginRight: 5 * widthScale,
  },
  check: {
    width: 16 * widthScale,
    height: 16 * widthScale,
    borderRadius: 12.5 * widthScale,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.151)',
    borderWidth: 1 * widthScale,
  },
  checkIcon: {},
  default: {
    fontSize: 11 * widthScale,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10 * widthScale,
    width: 27 * widthScale,
    textAlign: 'center',
  },
  touchBorder: {
    borderRadius: 12.5 * widthScale,
  },
});

/**
 * 黑名单
 */
export const BlackListScreenStyles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  img: {
    width: 120 * widthScale,
    height: 120 * widthScale,
    marginTop: 60 * widthScale,
  },
  text: {
    marginTop: 10 * widthScale,
    textAlign: 'center',
    fontSize: 16 * widthScale,
  },
});

/**
 * 鱼塘设置
 */
export const FishBondScreenSettingStyles = StyleSheet.create({
  area: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20 * widthScale,
    backgroundColor: 'white',
    padding: 20 * widthScale,
  },
  right: {
    position: 'absolute',
    right: 20 * widthScale,
  },
});

/**
 * 删除账户页面样式
 */
export const DeleteAccountScreenStyles = StyleSheet.create({
  area: {
    marginTop: 15 * widthScale,
    height: 55 * widthScale,
  },
});

/**
 * 我的资料页面样式
 */
export const PersonalSettingScreenStyles = StyleSheet.create({
  area: {
    ...padding,
  },
  tip: {
    marginTop: 30 * widthScale,
    marginBottom: 10 * widthScale,
    marginLeft: 5 * widthScale,
    fontSize: 14 * widthScale,
    color: 'gray',
  },
  content: {
    marginBottom: 20 * widthScale,
  },
  box: {
    height: 50 * widthScale,
    borderBottomWidth: 0,
    backgroundColor: 'white',
  },
  first: {
    borderTopLeftRadius: 10 * widthScale,
    borderTopRightRadius: 10 * widthScale,
    height: 70 * widthScale,
  },
  last: {
    borderBottomLeftRadius: 10 * widthScale,
    borderBottomRightRadius: 10 * widthScale,
  },
  image: {
    width: 55 * widthScale,
    height: 55 * widthScale,
    right: 40 * widthScale,
    position: 'absolute',
    borderRadius: 10 * widthScale,
  },
});

/**
 * 搜索框
 */
export const SearchInputPropsStyles = StyleSheet.create({
  area: {
    flexDirection: 'row',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    paddingLeft: 5 * widthScale,
    paddingRight: 5 * widthScale,
    height: 36 * widthScale,
    borderRadius: 30 * widthScale,
  },
  input: {
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
});

/**
 * homescreen
 */
export const HomeScreenStyles = StyleSheet.create({
  top: {
    backgroundColor: '#ffee00',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50 * widthScale,
    ...padding,
  },
  bottom: {
    marginBottom: 10 * widthScale,
  },
  goTop: {
    position: 'absolute',
    bottom: '10%',
    right: '6%',
    width: 40 * widthScale,
    height: 40 * widthScale,
    backgroundColor: 'white',
    borderRadius: 20 * widthScale,
    borderWidth: 2 * widthScale,
    borderColor: '#ffee00',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goTopText: {},
  box: {
    backgroundColor: 'white',
    width: '47.5%',
    marginLeft: '1.25%',
    marginRight: '1.25%',
    marginBottom: '2%',
    borderRadius: 10 * widthScale,
    height: 300 * widthScale,
  },
});

/**
 * HomeSwiperStyles
 */
export const HomeSwiperStyles = StyleSheet.create({
  swiper: {
    marginTop: 5 * widthScale,
    borderRadius: 15 * widthScale,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15 * widthScale,
  },
  father: {
    paddingLeft: 5 * widthScale,
    paddingRight: 5 * widthScale,
    backgroundColor: 'white',
    height: 150 * widthScale,
  },
  loading: {
    width: '100%',
    height: '100%',
  },
  pageStyle: {
    marginBottom: '-5%',
  },
});

/**
 * KindAreaStyles
 */
export const KindAreaStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    height: 140 * widthScale,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 20 * widthScale,
    paddingBottom: 20 * widthScale,
  },
  loading: {
    width: '100%',
    height: '100%',
  },
  box: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10 * widthScale,
  },
  img: {
    width: 30 * widthScale,
    height: 30 * widthScale,
  },
});

/**
 * RefreshListStyles
 */
export const RefreshListStyles = StyleSheet.create({
  empty: {
    marginTop: 10 * widthScale,
    height: 400 * widthScale,
    backgroundColor: 'white',
  },
  loading: {
    width: '100%',
    height: '30%',
  },
  headImg: {
    width: 30 * widthScale,
    height: 30 * widthScale,
  },
  father: {},
  box: {
    backgroundColor: 'white',
    width: '47.5%',
    marginLeft: '1.25%',
    marginRight: '1.25%',
    marginBottom: '2%',
    borderRadius: 10 * widthScale,
    height: 300 * widthScale,
  },
  img: {
    width: '100%',
    borderTopLeftRadius: 10 * widthScale,
    borderTopRightRadius: 10 * widthScale,
    height: '60%',
  },
  priceList: {
    display: 'flex',
    paddingLeft: 5 * widthScale,
    paddingRight: 5 * widthScale,
  },
  priceRight: {
    position: 'absolute',
    right: 15 * widthScale,
    fontSize: 12 * widthScale,
    color: 'gray',
  },
  price: {
    color: 'red',
    fontWeight: '700',
    fontSize: 16 * widthScale,
  },
  description: {
    overflow: 'hidden',
    fontWeight: '700',
    padding: 5 * widthScale,
    height: 50 * widthScale,
  },
  head: {
    padding: 5 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headRight: {
    position: 'absolute',
    right: 15 * widthScale,
    fontSize: 12 * widthScale,
    color: 'gray',
  },
});

/**
 * DetailStyles
 */
export const DetailStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    paddingLeft: 20 * widthScale,
    paddingRight: 20 * widthScale,
  },
  head: {
    paddingTop: 10 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'rgba(128, 128, 128, 0.1)',
    paddingBottom: 10 * widthScale,
    borderBottomWidth: 1,
  },
  userName: {
    fontSize: 15 * widthScale,
    fontWeight: '700',
    overflow: 'hidden',
  },
  userNameArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameIcon: {
    color: 'rgb(71, 162, 204)',
  },
  iconArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(71, 162, 204, 0.1)',
    marginLeft: 15 * widthScale,
    borderRadius: 2 * widthScale,
  },
  iconText: {
    color: 'rgb(71, 162, 204)',
    fontSize: 13 * widthScale,
    fontWeight: '600',
  },
  location: {
    color: 'gray',
    fontSize: 12 * widthScale,
  },
  headImg: {
    width: 48 * widthScale,
    height: 48 * widthScale,
    borderRadius: 10 * widthScale,
  },
  headRight: {
    marginLeft: 10 * widthScale,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  priceArea: {
    paddingTop: 20 * widthScale,
    paddingBottom: 20 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLeft: {
    color: 'red',
    fontSize: 15 * widthScale,
  },
  priceText: {
    color: 'red',
    fontWeight: '700',
    fontSize: 20 * widthScale,
  },
  priceRight: {
    marginLeft: 5 * widthScale,
    backgroundColor: 'rgba(255, 0, 0, 0.116)',
    paddingLeft: 5 * widthScale,
    paddingRight: 5 * widthScale,
  },
  priceRightText: {
    fontSize: 12 * widthScale,
    color: 'red',
  },
  description: {
    fontSize: 16 * widthScale,
    paddingBottom: 20 * widthScale,
  },
  image: {
    width: '100%',
    height: 300 * widthScale,
  },
  imgHeader: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 20 * widthScale,
  },
  headerIcon: {
    color: 'white',
  },
});
