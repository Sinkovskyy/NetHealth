import {StyleSheet} from 'react-native';
import {Colors} from '../../../common/conts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    margin: 20,
  },

  infoContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  infoLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.mainText,
  },

  infoValue: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.blueText,
  },
});
