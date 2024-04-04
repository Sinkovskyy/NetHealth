import {StyleSheet} from 'react-native';
import {Colors} from '../../common/conts';

export const GAP = 15;

export const PADDING = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: GAP,
    padding: PADDING,
    backgroundColor: Colors.backgroundMain,

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
