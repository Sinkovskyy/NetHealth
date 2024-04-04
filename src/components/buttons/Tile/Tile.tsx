import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {styles} from './styles';

type TileProps = {
  asset: ImageSourcePropType;
  width?: number;
  height?: number;
  title?: string;
} & TouchableOpacityProps;

const DEFAULT_SIZE = 100;

const IMAGE_RATION = 0.6;

export const Tile = ({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  asset,
  style,
  title,
  ...props
}: TileProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {width, height}, style]}
      {...props}>
      <Image
        source={asset}
        style={{width: height * IMAGE_RATION, height: height * IMAGE_RATION}}
      />

      {!!title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};
