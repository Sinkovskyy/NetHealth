import React, {useState} from 'react';
import {TracerouteHop} from '../../common/services/netInfo/types';
import {NetInfoService} from '../../common/services';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../common/conts';
import {Map} from '../../modules/Map';
import {IpSearch} from '../../components/sections/IpSearch';

export const TraceRoute = () => {
  const [hops, setHops] = useState<TracerouteHop[]>([]);
  const [full, setFull] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const onSearch = async (ip: string) => {
    setLoading(true);
    await NetInfoService.traceroute(ip)
      .then(response => {
        setHops(response.hops);
        setFull(response.full);
      })
      .catch(console.log);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Ip search input */}
        <IpSearch onSearch={onSearch} />

        {/* Loader */}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={Colors.mainBlue} />
          </View>
        )}

        {/* Map */}
        {!loading && (
          <>
            <Map
              polyline={hops.map(hop => ({
                latitude: hop.latitude,
                longitude: hop.longitude,
                title: hop.ipAddress || '',
              }))}
            />

            {/* Full info */}
            <Text style={styles.fullInfo}>{full}</Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.backgroundMain, flex: 1},

  loadingContainer: {flex: 1, justifyContent: 'center'},

  fullInfo: {
    padding: 10,
    gap: 10,
  },
});
