import React from 'react';
import {ScrollView, Text} from 'react-native';
import {PactStyles as styles} from '@/style';

export default function Pact() {
  return (
    <ScrollView style={styles.area}>
      <Text style={styles.title}>关于甜虾社区音视频类商品的管控通知</Text>
      <Text>
        为净化网络环境，担负维护社会道德责任，为网民提供一个健康、有序的网络空间，依据《甜虾管理规则》处罚一览表
        第六条第六款“发布存在交易安全隐患的商品及信息，即发布除《淘宝平台禁售信息管理规则》规定外的虚拟类风险商品及信息”，甜虾社区将对存储性质的音频、视频类商品进行专项清理，包括但不仅限于云存储的音视频、种子资源、通过云盘/在线分享等形式发货的虚拟类商品。
        自公告发布之日起至3月30日请甜虾用户进行自检自查，自行下架违规商品；4月1日起，甜虾社区将对相关商品进行下架、删除外，还将依据情节严重程度对甜虾用户进行权限管控。
      </Text>
      <Text style={styles.bottom}>甜虾社区 3月22日</Text>
    </ScrollView>
  );
}
