import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type IpInfoProps = {
  ipAddress: string;
  isp: string;
  city: string;
  region: string;
  country: string;
  zip: string;
  netType?: string;
};

export const IpInfo = ({
  ipAddress,
  isp,
  city,
  country,
  region,
  zip,
  netType,
}: IpInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Ваша IP адреса:</Text>
        <Text style={styles.infoValue}>{ipAddress}</Text>
      </View>

      {!!netType && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Тип мережі:</Text>
          <Text style={styles.infoValue}>{netType}</Text>
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>ISP:</Text>
        <Text style={styles.infoValue}>{isp}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Місто:</Text>
        <Text style={styles.infoValue}>{city}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Регіон:</Text>
        <Text style={styles.infoValue}>{region}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Країна:</Text>
        <Text style={styles.infoValue}>{country}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>ZIP код:</Text>
        <Text style={styles.infoValue}>{zip}</Text>
      </View>
    </View>
  );
};
