import {StyleSheet, StatusBar} from 'react-native';
import {Dimensions} from 'react-native';
//设计基准为宽411.43 高683.43

export const {width, height} = Dimensions.get('window');

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
    height: 50 * widthScale,
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
    height: 35 * widthScale,
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
    zIndex: 20,
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
    fontSize: 16 * widthScale,
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
    fontSize: 16 * widthScale,
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
    fontSize: 16 * widthScale,
  },
  phoneNum: {
    marginRight: 5 * widthScale,
    fontSize: 16 * widthScale,
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
    borderBottomLeftRadius: 10 * widthScale,
    borderBottomRightRadius: 10 * widthScale,
  },
  bottom: {
    paddingBottom: 10 * widthScale,
    backgroundColor: '#F2F2F2',
  },
  goTop: {
    position: 'absolute',
    bottom: '10%',
    right: '6%',
    width: 55 * widthScale,
    height: 55 * widthScale,
    backgroundColor: 'white',
    borderRadius: 27.5 * widthScale,
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
    borderRadius: 15 * widthScale,
    overflow: 'hidden',
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
    height: height,
    backgroundColor: 'white',
  },
  loading: {
    width: '100%',
    height: '30%',
  },
  headImg: {
    width: 30 * widthScale,
    height: 30 * widthScale,
    marginRight: 5 * widthScale,
    borderRadius: 5 * widthScale,
  },
  father: {},
  box: {
    backgroundColor: 'white',
    width: '47.5%',
    marginLeft: '1.25%',
    marginRight: '1.25%',
    marginBottom: '2%',
    borderRadius: 10 * widthScale,
    height: 310 * widthScale,
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
    height: '20%',
  },
  head: {
    padding: 5 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10 * widthScale,
  },
  headRight: {
    position: 'absolute',
    right: 15 * widthScale,
    fontSize: 12 * widthScale,
    color: 'gray',
  },
  username: {
    width: '40%',
  },
});

/**
 * DetailStyles
 */
const detailstylePadding = {
  backgroundColor: 'white',
  paddingLeft: 20 * widthScale,
  paddingRight: 20 * widthScale,
};
export const DetailStyles = StyleSheet.create({
  area: {},
  image: {
    width: '100%',
    height: 300 * widthScale,
    marginBottom: 10 * widthScale,
  },
  imageFather: {
    ...detailstylePadding,
  },
  bottom: {
    paddingTop: 20 * widthScale,
    paddingBottom: 15 * widthScale,
    ...detailstylePadding,
  },
  guarantee: {
    fontSize: 18 * widthScale,
    color: 'rgb(71, 162, 204)',
  },
  bottomRight: {
    position: 'absolute',
    right: 20 * widthScale,
    paddingTop: 20 * widthScale,
    fontSize: 14 * widthScale,
    color: 'gray',
  },
});

/**
 * CommentStyles
 */
export const CommentStyles = StyleSheet.create({
  comment: {
    marginTop: 15 * widthScale,
    backgroundColor: 'white',
    ...detailstylePadding,
    paddingTop: 15 * widthScale,
    paddingBottom: 15 * widthScale,
    marginBottom: 10 * widthScale,
  },
  commentTitle: {
    fontSize: 18 * widthScale,
    fontWeight: '700',
    paddingBottom: 15 * widthScale,
  },
  commentImg: {
    width: 150 * widthScale,
    height: 110 * widthScale,
  },
  noComment: {
    height: 270 * widthScale,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentTip: {
    color: 'gray',
    marginTop: 20 * widthScale,
  },
  commentBtnStyle: {
    width: 100 * widthScale,
    height: 40 * widthScale,
    borderWidth: 0,
    backgroundColor: '#ffee00',
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginTop: 20 * widthScale,
  },
  commentBox: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20 * widthScale,
    paddingBottom: 5 * widthScale,
    borderTopColor: 'rgba(128, 128, 128, 0.05)',
    borderTopWidth: 1,
  },
  commentUsername: {
    fontSize: 16 * widthScale,
    fontWeight: '700',
    paddingBottom: 5 * widthScale,
    paddingTop: 5 * widthScale,
  },
  commentRight: {
    display: 'flex',
    justifyContent: 'center',
  },
  commentImage: {
    width: 35 * widthScale,
    height: 35 * widthScale,
    borderRadius: 5 * widthScale,
    marginRight: 15 * widthScale,
  },
  commentContent: {
    paddingBottom: 10 * widthScale,
    fontSize: 16 * widthScale,
    width: width - 35 * widthScale - 15 * widthScale - 40 * widthScale,
  },
  commentTime: {
    color: 'gray',
  },
});

/**
 * UserMsgStyles
 */
export const UserMsgStyles = StyleSheet.create({
  userMsg: {
    marginTop: 15 * widthScale,
    backgroundColor: 'white',
    ...detailstylePadding,
    paddingTop: 20 * widthScale,
    paddingBottom: 11 * widthScale,
  },
  userMsgLeft: {},
  userMsgRight: {
    position: 'absolute',
    right: 20 * widthScale,
    top: '50%',
    marginTop: -32.5 * widthScale,
    width: 65 * widthScale,
    height: 65 * widthScale,
    borderRadius: 5 * widthScale,
  },
  userMsgBottom: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 8 * widthScale,
    paddingBottom: 8 * widthScale,
  },
  userMsgUsername: {
    paddingTop: 8 * widthScale,
    paddingBottom: 8 * widthScale,
    fontSize: 18 * widthScale,
    fontWeight: '700',
  },
  userMsgDescription: {
    fontSize: 14 * widthScale,
  },
  userMsgTip: {
    color: 'gray',
  },
});

/**
 * DeatailContentTopStyles
 */
export const DeatailContentTopStyles = StyleSheet.create({
  head: {
    paddingTop: 10 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'rgba(128, 128, 128, 0.1)',
    paddingBottom: 10 * widthScale,
    borderBottomWidth: 1,
    ...detailstylePadding,
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
    ...detailstylePadding,
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
    ...detailstylePadding,
  },
  saled: {
    fontSize: 18 * widthScale,
    fontFamily: 'song',
    color: 'red',
    position: 'absolute',
    right: 20 * widthScale,
  },
});

/**
 * DetailBottomAreaStyles
 */
export const DetailBottomAreaStyles = StyleSheet.create({
  area: {
    height: 66 * widthScale,
    backgroundColor: 'white',
    borderTopColor: 'rgba(128, 128, 128, 0.1)',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: 10 * widthScale,
    alignItems: 'center',
    paddingTop: 0 * widthScale,
    paddingBottom: 0 * widthScale,
  },
  right: {
    position: 'absolute',
    right: 16 * widthScale,
    top: 12 * widthScale,
    backgroundColor: '#ffee00',
    borderWidth: 0,
    width: 100 * widthScale,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10 * widthScale,
    paddingBottom: 10 * widthScale,
    borderRadius: 20 * widthScale,
  },
  icon: {
    marginRight: 20 * widthScale,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10 * widthScale,
  },
  iconFont: {
    marginTop: 3 * widthScale,
  },
  text: {
    fontSize: 13 * widthScale,
    color: 'gray',
    marginTop: 3 * widthScale,
  },
  inputLeft: {},
  inputArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIcon: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 5 * widthScale,
    paddingBottom: 5 * widthScale,
    marginLeft: -10 * widthScale,
  },
  angleIcon: {
    marginTop: -4 * widthScale,
  },
  inputHeadImg: {
    height: 30 * widthScale,
    flex: 0.8,
    paddingTop: 5 * widthScale,
    paddingBottom: 5 * widthScale,
  },
  input: {
    flex: 5,
    paddingTop: 5 * widthScale,
    paddingBottom: 5 * widthScale,
    paddingLeft: 5 * widthScale,
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
    marginLeft: 9 * widthScale,
    marginRight: 9 * widthScale,
  },
  button: {
    flex: 1.5,
    borderWidth: 0,
    paddingTop: 8.5 * widthScale,
    paddingBottom: 8.5 * widthScale,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#ffee00',
  },
});

/**
 * SearchHeaderStyles
 */
export const SearchHeaderStyles = StyleSheet.create({
  header: {
    marginTop: 30 * widthScale,
    flexDirection: 'row',
    display: 'flex',
    height: 60 * widthScale,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 15 * widthScale,
    ...padding,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 5 * widthScale,
    flex: 1,
  },
  inputArea: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50 * widthScale,
    marginRight: 10 * widthScale,
  },
  inputText: {
    backgroundColor: '#F2F2F2',
    padding: 10 * widthScale,
    paddingRight: 5 * widthScale,
  },
  btn: {
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 18 * widthScale,
    marginLeft: 10 * widthScale,
  },
  leftIcon: {
    flex: 1,
  },
});

/**
 * SearchStyles
 */
export const SearchStyles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'white',
  },
  marginTop: {
    marginTop: 10 * widthScale,
  },
});

/**
 * SellScreenStyles
 */

export const SellScreenStyles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffee00',
    width: 45 * widthScale,
    height: 45 * widthScale,
    borderRadius: 22.5 * widthScale,
  },
  border: {
    position: 'absolute',
    bottom: '7%',
    right: '5%',
    width: 45 * widthScale,
    height: 45 * widthScale,
    borderRadius: 22.5 * widthScale,
    overflow: 'hidden',
  },
});

/**
 * ReleaseHeaderStyles
 */
export const ReleaseHeaderStyles = StyleSheet.create({
  btn: {
    backgroundColor: '#ffee00',
    paddingTop: 6 * widthScale,
    paddingLeft: 15 * widthScale,
    paddingRight: 10 * widthScale,
    paddingBottom: 6 * widthScale,
    borderRadius: 20 * widthScale,
    width: 70 * widthScale,
    borderWidth: 0,
  },
});

/**
 * ReleaseStyles
 */
export const ReleaseStyles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'white',
    ...padding,
  },
  input: {
    marginTop: 10 * widthScale,
    height: 200 * widthScale,
    overflow: 'hidden',
    fontSize: 16 * widthScale,
  },
  imageSelectArea: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    backgroundColor: '#F1F1F1',
    flexBasis: 120 * widthScale,
    height: 120 * widthScale,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5 * widthScale,
    marginRight: 5 * widthScale,
    marginBottom: 10 * widthScale,
  },
  img: {
    height: 120 * widthScale,
    width: 120 * widthScale,
    borderRadius: 5 * widthScale,
  },
  priceArea: {
    height: 60 * widthScale,
    borderTopColor: 'rgba(128, 128, 128, 0.1)',
    borderTopWidth: 1 * widthScale,
    marginTop: 40 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5 * widthScale,
  },
  price: {
    color: 'red',
  },
  priceCirle: {
    width: 20 * widthScale,
    height: 20 * widthScale,
    backgroundColor: 'rgb(182, 181, 181)',
    borderRadius: 10 * widthScale,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  priceIcon: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16 * widthScale,
  },
  priceTip: {
    fontSize: 17 * widthScale,
    marginLeft: 10 * widthScale,
  },
  right: {
    position: 'absolute',
    right: 15 * widthScale,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  rightText: {
    color: 'red',
    fontSize: 18 * widthScale,
    marginRight: 10 * widthScale,
  },
});

/**
 * NumKeyboardStyles
 */
export const NumKeyboardStyles = StyleSheet.create({
  area: {
    backgroundColor: '#fff',
    height: height * 0.5,
  },
  showPrice: {
    height: 65 * widthScale,
    marginLeft: 15 * widthScale,
    marginRight: 15 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tip: {
    fontSize: 18 * widthScale,
    flex: 1,
  },
  result: {
    fontSize: 18 * widthScale,
    flex: 6,
  },
  num: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '75%',
  },
  numBox: {
    width: '33.3333%',
    height: '25%',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboard: {
    height: height * 0.5 - 65 * widthScale,
    display: 'flex',
    flexDirection: 'row',
  },
  right: {
    display: 'flex',
    width: '25%',
  },
  rightBox: {
    borderRightWidth: 1,
    height: '50%',
    borderTopWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  determine: {
    backgroundColor: '#FFEE24',
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  determineText: {},
  boxText: {
    fontSize: 25 * widthScale,
    fontWeight: '600',
  },
});

/**
 * 消息界面样式
 */
export const MessageScreenStyles = StyleSheet.create({
  area: {
    flex: 1,
  },
  noResult: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
    backgroundColor: 'white',
  },
  noResultImg: {
    width: 150 * widthScale,
    height: 150 * widthScale,
  },
  noResultText1: {
    fontWeight: '700',
    fontSize: 16 * widthScale,
    marginTop: 20 * widthScale,
  },
  noResultText2: {
    color: 'gray',
    marginTop: 20 * widthScale,
  },
  msglist: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'rgba(128, 128, 128, 0.2)',
    borderBottomWidth: 1 * widthScale,
    paddingTop: 15 * widthScale,
    paddingBottom: 15 * widthScale,
  },
  headImg: {
    width: 60 * widthScale,
    height: 60 * widthScale,
    borderRadius: 10 * widthScale,
    marginRight: 20 * widthScale,
  },
  singleMsg: {
    ...padding,
    backgroundColor: 'white',
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
  },
  username: {
    fontSize: 18 * widthScale,
    fontFamily: 'song',
    fontWeight: '700',
  },
  tip: {
    color: 'gray',
    fontSize: 16 * widthScale,
    marginTop: 8 * widthScale,
  },
});

/**
 * 用户界面样式
 */
export const UserScreenStyles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'white',
    height: height - (StatusBar.currentHeight || 30) * 4.5,
  },
  noResult: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
    backgroundColor: 'white',
  },
  noResultImg: {
    width: 150 * widthScale,
    height: 150 * widthScale,
  },
  noResultText1: {
    fontWeight: '700',
    fontSize: 16 * widthScale,
    marginTop: 20 * widthScale,
  },
  noResultText2: {
    color: 'gray',
    marginTop: 20 * widthScale,
  },
});

/**
 * 消息栏目顶部区域
 */
export const MessageTopAreaStyles = StyleSheet.create({
  img: {
    width: 40 * widthScale,
    height: 40 * widthScale,
  },
  boxArea: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'white',
    marginLeft: 15 * widthScale,
    marginRight: 15 * widthScale,
    padding: 20 * widthScale,
    alignItems: 'center',
    borderRadius: 15 * widthScale,
    marginTop: -100 * widthScale,
  },
  box: {
    flex: 1,
    alignItems: 'center',
  },
  boxText: {
    marginTop: 10 * widthScale,
  },
  topBackground: {
    height: 200 * widthScale,
    borderRadius: 200 * widthScale,
    backgroundColor: '#ffee00',
    marginTop: -100 * widthScale,
  },
});

/**
 * 聊天界面底部输入区域
 */
export const BottomInputChatStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    flexDirection: 'row',
    display: 'flex',
    height: 60 * widthScale,
  },
  input: {
    flex: 7,
    paddingLeft: 15 * widthScale,
  },
  btn: {
    color: '#0188FB',
    flex: 1,
    padding: 15 * widthScale,
    fontSize: 18 * widthScale,
    paddingTop: 20 * widthScale,
  },
});

/**
 * RecordListStyles
 */
export const RecordListStyles = StyleSheet.create({
  area: {},
  img: {
    width: 50 * widthScale,
    height: 50 * widthScale,
    borderRadius: 25 * widthScale,
  },
  time: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30 * widthScale,
    marginBottom: 30 * widthScale,
    color: 'gray',
  },
  me: {
    flexDirection: 'row-reverse',
  },
  you: {
    flexDirection: 'row',
  },
  user: {
    display: 'flex',
    marginBottom: 50 * widthScale,
    alignItems: 'flex-start',
  },
  meMsg: {
    backgroundColor: '#0188FB',
  },
  youMsg: {
    backgroundColor: 'white',
  },
  msg: {
    maxWidth: width * 0.7,
    overflow: 'hidden',
    padding: 10 * widthScale,
    borderRadius: 10 * widthScale,
    minWidth: 50 * widthScale,
  },
  meImg: {
    marginRight: 20 * widthScale,
    marginLeft: 20 * widthScale,
  },
  youImg: {
    marginLeft: 20 * widthScale,
    marginRight: 20 * widthScale,
  },
  text: {
    color: 'white',
    fontSize: 16 * widthScale,
    fontFamily: 'song',
  },
  tail: {
    position: 'absolute',
  },
  tailTop: {},
  tailBottom: {},
});

/**
 * 余额样式
 */
export const BalanceScreenStyles = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    marginTop: '20%',
  },
  title: {
    fontSize: 22 * widthScale,
    marginTop: 25 * widthScale,
  },
  balance: {
    fontSize: 30 * widthScale,
    fontWeight: '700',
    marginTop: 30 * widthScale,
  },
  full: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btn: {
    borderTopWidth: 0,
    borderRadius: 6 * widthScale,
    backgroundColor: '#07C160',
    width: '60%',
    marginTop: 50 * widthScale,
    paddingTop: 15 * widthScale,
    paddingBottom: 15 * widthScale,
  },
  text: {
    color: 'white',
    fontFamily: 'song',
    fontSize: 18 * widthScale,
  },
});

/**
 * 弹出框
 */
export const DepositBlanceStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    zIndex: 10,
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
    paddingTop: 10 * widthScale,
    borderRadius: 10 * widthScale,
  },
  img: {
    height: '80%',
    width: 150 * widthScale,
  },
  lineFather: {
    paddingLeft: 18 * widthScale,
    paddingRight: 18 * widthScale,
  },
  line: {
    display: 'flex',
    borderBottomColor: 'rgba(196, 196, 196, 0.192)',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70 * widthScale,
    borderBottomWidth: 1,
  },
  btn: {
    backgroundColor: '#1989FA',
    borderTopWidth: 0,
    borderRadius: 6 * widthScale,
    width: '60%',
    marginTop: 20 * widthScale,
    marginBottom: 20 * widthScale,
    paddingTop: 15 * widthScale,
    paddingBottom: 15 * widthScale,
  },
  btnText: {
    color: 'white',
    fontFamily: 'song',
    fontSize: 18 * widthScale,
  },
  btnCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0.8,
    fontSize: 16 * widthScale,
  },
  input: {
    flex: 3,
  },
  rightTitle: {
    flex: 1.5,
  },
  loading: {
    marginTop: -210 * widthScale,
  },
});

/**
 * 顶部区域样式
 */
export const checkOrderTopAreaStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    ...padding,
    marginTop: 15 * widthScale,
    display: 'flex',
    height: 140 * widthScale,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rgiht: {
    flex: 2,
    justifyContent: 'flex-start',
    height: '80%',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    fontSize: 15 * widthScale,
    color: 'red',
  },
  des: {
    overflow: 'hidden',
    fontSize: 16 * widthScale,
    fontFamily: 'song',
  },
  img: {
    flex: 0.8,
    height: '80%',
    borderRadius: 10 * widthScale,
    marginRight: 10 * widthScale,
  },
});

/**
 * 底部按钮样式
 */
export const CheckOrderBottomButtonStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60 * widthScale,
    padding: 8 * widthScale,
    alignItems: 'center',
    ...padding,
  },
  text: {
    fontSize: 16 * widthScale,
    flex: 1,
  },
  price: {
    color: 'red',
    fontFamily: 'song',
    fontSize: 18 * widthScale,
  },
  btn: {
    backgroundColor: '#FFEE24',
    position: 'absolute',
    height: '100%',
    right: 15 * widthScale,
    paddingLeft: 25 * widthScale,
    paddingRight: 25 * widthScale,
    borderRadius: 25 * widthScale,
  },
});

/**
 * 检验订单中间区域样式
 */
export const CheckOrderLocationStyles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    height: 60 * widthScale,
    padding: 10 * widthScale,
    ...padding,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10 * widthScale,
  },
  right: {
    position: 'absolute',
    right: 15 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    width: 180 * widthScale,
    overflow: 'hidden',
    textAlign: 'right',
    marginRight: 5 * widthScale,
  },
  title: {
    marginLeft: 5 * widthScale,
    fontFamily: 'song',
    fontSize: 16 * widthScale,
  },
});

/**
 * 个人主页顶部区域
 */
export const ProfileTopAreaStyles = StyleSheet.create({
  area: {
    backgroundColor: 'rgba(66,66,66,.51)',
    height: '100%',
    width: '100%',
  },
  bgImg: {
    width: '100%',
    height: height * 0.4,
    zIndex: -1,
  },
  nav: {
    marginTop: StatusBar.currentHeight || 30,
    ...padding,
  },
  headImgView: {
    borderWidth: 3 * widthScale,
    borderColor: 'white',
    width: 75 * widthScale,
    height: 75 * widthScale,
    marginRight: 15 * widthScale,
    borderRadius: 10 * widthScale,
  },
  headImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10 * widthScale,
  },
  top: {
    marginTop: 10 * widthScale,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...padding,
  },
  user: {
    display: 'flex',
    justifyContent: 'center',
  },
  userId: {
    color: 'white',
    fontFamily: 'song',
    fontSize: 18 * widthScale,
    overflow: 'hidden',
    width: '70%',
    marginBottom: 8 * widthScale,
    fontWeight: '700',
  },
  username: {
    color: 'white',
    fontFamily: 'song',
    marginBottom: 5 * widthScale,
  },
  auth: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#AAA8AC',
    width: '40%',
    borderRadius: 10 * widthScale,
    justifyContent: 'center',
  },
  authText: {
    color: 'white',
    fontFamily: 'song',
  },
  editProfile: {
    borderColor: 'white',
    borderWidth: 1 * widthScale,
    padding: 8 * widthScale,
    marginLeft: -35 * widthScale,
    borderRadius: 5 * widthScale,
  },
  editText: {
    color: 'white',
    fontFamily: 'song',
    fontSize: 16 * widthScale,
  },
  bottom: {
    ...padding,
    marginTop: 15 * widthScale,
  },
  randomBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeTip: {
    color: 'white',
    marginBottom: 10 * widthScale,
    fontSize: 16 * widthScale,
    fontFamily: 'song',
  },
  randomText: {
    color: 'white',
    fontSize: 18 * widthScale,
    fontFamily: 'song',
    fontWeight: '700',
    marginRight: 20 * widthScale,
    marginTop: 8 * widthScale,
  },
});

/**
 * 个人主页样式
 */

export const ProfileStyles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '20%',
  },
  area: {
    flex: 1,
    backgroundColor: 'white',
  },
});

/**
 *  顶部区域样式
 */
export const OrderScreenStyles = StyleSheet.create({
  tabBarUnderlineStyle: {
    backgroundColor: '#EE0A24',
    borderRadius: 5 * widthScale,
    width: '10%',
    marginLeft: '5.5%',
  },
  tabBarTextStyle: {
    fontSize: 16 * widthScale,
    fontFamily: 'song',
  },
  tabbarStyle: {
    borderBottomWidth: 0,
  },
});

/**
 * 操作框的样式
 */
export const OperateBoxsStyles = StyleSheet.create({
  father: {
    borderRadius: 10 * widthScale,
    overflow: 'hidden',
  },
  area: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5 * widthScale,
    marginLeft: 10 * widthScale,
    marginRight: 10 * widthScale,
    padding: 10 * widthScale,
    borderRadius: 10 * widthScale,
  },
  img: {
    width: 110 * widthScale,
    height: 110 * widthScale,
    borderRadius: 10 * widthScale,
    marginRight: 10 * widthScale,
  },
  description: {
    width: width - 160 * widthScale,
    fontFamily: 'song',
    fontSize: 16 * widthScale,
    marginBottom: 10 * widthScale,
    height: 45 * widthScale,
  },
  right: {
    display: 'flex',
  },
  author: {
    color: 'gray',
    fontFamily: 'song',
    marginBottom: 10 * widthScale,
  },
  price: {
    color: 'red',
    fontSize: 16 * widthScale,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16 * widthScale,
    color: 'gray',
  },
  emptyImg: {
    width: width * 0.8,
    height: height * 0.5,
  },
  loading: {
    top: height / 2 - 120 * widthScale,
  },
});

/**
 * 底部按钮样式渲染
 */
export const OrderRenderButtonStyles = StyleSheet.create({
  area: {
    position: 'absolute',
    right: 0,
    bottom: 5 * widthScale,
  },
  commText: {
    fontFamily: 'song',
    color: 'white',
    padding: 5 * widthScale,
  },
  nonOperate: {
    backgroundColor: '#07C160',
    borderRadius: 5 * widthScale,
    fontSize: 12 * widthScale,
  },
  operate: {
    backgroundColor: '#FFEE24',
    borderRadius: 10 * widthScale,
    paddingLeft: 10 * widthScale,
    paddingRight: 10 * widthScale,
    fontSize: 14 * widthScale,
  },
  bottom: {
    padding: 10 * widthScale,
    height: height * 0.22,
  },
  bottomLine: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10 * widthScale,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: 'rgba(1,1,1,0.1)',
  },
  btnFather: {
    padding: 12 * widthScale,
    display: 'flex',
    alignItems: 'flex-end',
  },
  bottomBtn: {
    backgroundColor: '#FFEE24',
    width: '30%',
    paddingLeft: 0 * widthScale,
    paddingRight: 0 * widthScale,
    borderRadius: 5 * widthScale,
    borderTopWidth: 0,
  },
  bottomBtnText: {
    color: 'white',
  },
  bottomInput: {
    width: width - 80 * widthScale,
    fontSize: 16 * widthScale,
  },
  bottomTips: {
    fontSize: 16 * widthScale,
  },
});

/**
 * 公约样式
 */
export const PactStyles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 40 * widthScale,
    paddingRight: 40 * widthScale,
  },
  title: {
    fontSize: 20 * widthScale,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20 * widthScale,
    marginBottom: 20 * widthScale,
  },
  bottom: {
    width: '100%',
    textAlign: 'right',
    paddingLeft: 40 * widthScale,
    paddingRight: 20 * widthScale,
    marginTop: 40 * widthScale,
    marginBottom: 100 * widthScale,
  },
});
