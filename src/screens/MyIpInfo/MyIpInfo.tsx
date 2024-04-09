import React, {useEffect, useMemo} from 'react';
import {Map} from '../../modules/Map';

import {useNetInfo} from '../../common/hooks';
import {Sections} from '../../components/sections';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../common/conts';

export const MyIpInfoScreen = () => {
  const {fetchMyNetInfo, netInfo, publicIpAdress, netType} = useNetInfo();

  const showInfo = useMemo(
    () => !!publicIpAdress && !!netInfo,
    [netInfo, publicIpAdress],
  );

  useEffect(() => {
    fetchMyNetInfo();
  }, [fetchMyNetInfo]);

  return (
    <View style={styles.container}>
      {showInfo && (
        <>
          <Map
            coords={{
              latitude: netInfo?.latitude,
              longitude: netInfo?.longitude,
            }}
            markerTitle={publicIpAdress}
          />

          <Sections.IpInfo
            ipAddress={publicIpAdress!}
            isp={netInfo!.as}
            city={netInfo!.city_name}
            country={netInfo!.country_name}
            region={netInfo!.region_name}
            zip={netInfo!.zip_code}
            netType={netType}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.backgroundMain, flex: 1},
});
