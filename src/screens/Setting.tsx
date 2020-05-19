import React from 'react';
import {ScrollView} from 'react-native';
import getAreaByData from '@/components/setting/SingleLineSettingArea';

export default function Setting() {
  const Top = getAreaByData([
    {title: '个人资料设置', iconName: 'user'},
    {title: '收货地址', iconName: 'enviromento'},
    {title: '鱼塘', iconName: 'team'},
    {title: '用户', iconName: 'github'},
    {title: '黑名单', iconName: 'user'},
  ]);
  const Middle = getAreaByData([
    {title: '宝贝自动回复', iconName: 'swap'},
    {title: '图片质量设置', iconName: 'picture'},
    {title: '自动播放视频设置', iconName: 'playcircleo'},
    {title: '语音电话设置', iconName: 'phone'},
    {title: '隐私', iconName: 'infocirlceo'},
  ]);
  const Bottom = getAreaByData([
    {title: '关于甜虾', iconName: 'checkcircleo'},
    {title: '把甜虾推荐给朋友', iconName: 'hearto'},
    {title: '社区公约', iconName: 'notification'},
  ]);
  return (
    <ScrollView>
      {Top}
      {Middle}
      {Bottom}
    </ScrollView>
  );
}
