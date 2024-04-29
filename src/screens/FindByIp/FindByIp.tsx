import React, {useEffect, useMemo, useState} from 'react';
import {Map} from '../../modules/Map';
import {useNetInfo} from '../../common/hooks';
import {View} from 'react-native';
import {Sections} from '../../components/sections';
import {styles} from './styles';
import {IpSearch} from '../../components/sections/IpSearch';

export const FindByIp = () => {
  const [searchedIpAddress, setSearchedIpAddress] = useState<
    string | undefined
  >(undefined);

  const {fetchLocationData, netInfo} = useNetInfo();

  const showInfo = useMemo(
    () => !!searchedIpAddress && !!netInfo,
    [netInfo, searchedIpAddress],
  );

  useEffect(() => {
    if (!searchedIpAddress) {
      return;
    }
    fetchLocationData(searchedIpAddress);
  }, [fetchLocationData, searchedIpAddress]);

  return (
    <View style={styles.container}>
      <IpSearch onSearch={setSearchedIpAddress} />

      {showInfo && netInfo && (
        <View>
          <Map
            coords={{
              latitude: netInfo?.latitude,
              longitude: netInfo?.longitude,
            }}
            markerTitle={searchedIpAddress}
          />

          <Sections.IpInfo
            ipAddress={searchedIpAddress!}
            isp={netInfo!.as}
            city={netInfo!.city_name}
            country={netInfo!.country_name}
            region={netInfo!.region_name}
            zip={netInfo!.zip_code}
          />
        </View>
      )}
    </View>
  );
};
