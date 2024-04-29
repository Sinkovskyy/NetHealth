import React from 'react';
import {DimensionValue} from 'react-native';
import MapView, {
  LatLng,
  MapViewProps,
  Marker,
  Polyline,
} from 'react-native-maps';

type MapProps = {
  width?: DimensionValue;
  height?: DimensionValue;
  coords?: LatLng;
  polyline?: (LatLng & {title: string})[];
  markerTitle?: string;
} & Pick<MapViewProps, 'style'>;

export const Map = ({
  width = '100%',
  height = 300,
  style,
  coords,
  polyline,
  markerTitle,
}: MapProps) => {
  const latitude = coords?.latitude || polyline?.[0]?.latitude;
  const longitude = coords?.longitude || polyline?.[0]?.longitude;

  if (!latitude || !longitude) {
    return null;
  }

  return (
    <>
      <MapView
        style={[{width, height}, style]}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: polyline ? 100 : 0.0922,
          longitudeDelta: polyline ? 100 : 0.0421,
        }}>
        {!polyline && coords && (
          <Marker
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
            title={markerTitle}
          />
        )}

        {polyline?.map((line, index) => (
          <Marker key={index} coordinate={line} title={line.title} />
        ))}

        {!!polyline && <Polyline coordinates={polyline} strokeWidth={2} />}
      </MapView>
    </>
  );
};
