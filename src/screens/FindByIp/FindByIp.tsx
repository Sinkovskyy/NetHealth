import React, {useEffect, useMemo, useState} from 'react';
import {Map} from '../../modules/Map';
import {useNetInfo} from '../../common/hooks';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {Sections} from '../../components/sections';
import {styles} from './styles';
import {Assets} from '../../common/assets';

export const FindByIp = () => {
  const [searchedIpAddress, setSearchedIpAddress] = useState<
    string | undefined
  >(undefined);

  const [searchValue, setSearchValue] = useState('');
  const {fetchLocationData, netInfo} = useNetInfo();

  const showInfo = useMemo(
    () => !!searchedIpAddress && !!netInfo,
    [netInfo, searchedIpAddress],
  );

  const onSearch = () => {
    setSearchedIpAddress(searchValue);
  };

  useEffect(() => {
    if (!searchedIpAddress) {
      return;
    }
    fetchLocationData(searchedIpAddress);
  }, [fetchLocationData, searchedIpAddress]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Введіть IP адресу"
          onChangeText={setSearchValue}
        />

        <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
          <Image source={Assets.search} style={styles.searchImage} />
        </TouchableOpacity>
      </View>

      {showInfo && (
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
