import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  MyAppState,
  ProfileProps,
  GetPersonalResponse,
  ProfileDataState,
} from '@/types';
import {connect} from 'react-redux';
import ProfileTopArea from '@/components/profile/ProfileTopArea';
import {axios} from '@/api';
import RefreshList from '@/components/comm/RefreshList';
import {widthScale} from '@/style';
import {ProfileStyles as styles} from '@/style';

function Profile({forceRefresh, user}: ProfileProps) {
  const [data, setData] = useState<ProfileDataState>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get<GetPersonalResponse>(`/user/personal/${user._id}`)
      .then((res) => {
        if (res.data.data.commodity.length === 0) {
          return;
        }
        const commodity = res.data.data.commodity.map((v) => {
          return {...v, user: {userName: user.userName, headImg: user.headImg}};
        });
        setData(commodity);
        setTimeout(() => {
          setIsLoading(false);
        }, 0);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [forceRefresh]);
  return (
    <View style={[{flex: 1}, isLoading && styles.area]}>
      <ProfileTopArea />
      <View style={{marginTop: 8 * widthScale}}></View>
      {isLoading ? (
        <ActivityIndicator
          size={50 * widthScale}
          color="#ffee00"
          style={styles.loading}
        />
      ) : (
        <RefreshList data={data} />
      )}
    </View>
  );
}

const stateToProps = (state: MyAppState) => ({
  forceRefresh: state.forceRefresh,
  user: state.user,
});

export default connect(stateToProps)(Profile);
