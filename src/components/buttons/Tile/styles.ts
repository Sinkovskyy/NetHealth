import {StyleSheet} from 'react-native';
import {Colors} from '../../../common/conts';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.mainBlue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    gap: 8,
  },

  title: {
    color: Colors.backgroundMain,
    fontSize: 17,
    fontWeight: '600',
  },
});
