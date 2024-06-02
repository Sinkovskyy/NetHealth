import React from 'react';
import {Dimensions, View} from 'react-native';
import {Buttons} from '../../components/buttons';
import {GAP, PADDING, styles} from './styles';
import {Assets} from '../../common/assets';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../navigation/types';

const {width} = Dimensions.get('window');

const MONO_TILE_WIDTH = width - PADDING * 2;
const TILE_SIZE = width / 2 - GAP / 2 - PADDING;

export const MenuScreen = () => {
  const navigation = useNavigation();

  const onMyIpAddressPress = () => {
    navigation.navigate(Screens.MyIpInfo as never);
  };

  const onFindByIPPress = () => {
    navigation.navigate(Screens.FindIpInfo as never);
  };

  const onTraceroutePress = () => {
    navigation.navigate(Screens.Traceroute as never);
  };

  return (
    <View style={styles.container}>
      <Buttons.Tile
        width={TILE_SIZE}
        height={TILE_SIZE}
        asset={Assets.myIpAddress}
        title="Моя IP адреса"
        onPress={onMyIpAddressPress}
      />
      <Buttons.Tile
        width={TILE_SIZE}
        height={TILE_SIZE}
        asset={Assets.anotherIpAddress}
        title={'Пошук по IP'}
        onPress={onFindByIPPress}
      />

      <Buttons.Tile
        width={MONO_TILE_WIDTH}
        height={TILE_SIZE}
        asset={Assets.tracking}
        title={'Traceroute'}
        onPress={onTraceroutePress}
      />
    </View>
  );
};
