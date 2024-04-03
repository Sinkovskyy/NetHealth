import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const MainScreen = () => {
  useEffect(() => {
    const fetchIpAddress = async () => {
      const networkState = await NetInfo.fetch();
      console.log(networkState);
    };

    fetchIpAddress();
  }, []);
  return <></>;
};
