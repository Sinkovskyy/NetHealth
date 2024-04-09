import React from 'react';
import {DimensionValue} from 'react-native';
import MapView, {MapViewProps, Marker} from 'react-native-maps';

type MapProps = {
  width?: DimensionValue;
  height?: DimensionValue;
  coords?: {
    latitude?: number;
    longitude?: number;
  };
  markerTitle?: string;
} & Pick<MapViewProps, 'style'>;

export const Map = ({
  width = '100%',
  height = 300,
  style,
  coords,
  markerTitle,
}: MapProps) => {
  if (!coords?.latitude || !coords?.longitude) {
    return null;
  }
  return (
    <>
      <MapView
        style={[{width, height}, style]}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: coords.latitude, longitude: coords.longitude}}
          title={markerTitle}
        />
      </MapView>
    </>
  );
};
