import {StyleSheet} from 'react-native';
import {Colors} from '../../common/conts';

const SEARCH_BAR_HEIGHT = 50;
const SEARCH_BAR_BORDER_RAIDUS = 4;

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.backgroundMain, flex: 1},
  textInput: {
    backgroundColor: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    height: SEARCH_BAR_HEIGHT,
    flex: 1,
    borderRadius: SEARCH_BAR_BORDER_RAIDUS,
    paddingLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    // flex: 1,
    margin: 20,
    gap: 20,
  },

  searchButton: {
    height: SEARCH_BAR_HEIGHT,
    width: SEARCH_BAR_HEIGHT,
    backgroundColor: Colors.blueText,
    borderRadius: SEARCH_BAR_BORDER_RAIDUS,

    alignItems: 'center',
    justifyContent: 'center',
  },

  searchImage: {width: 30, height: 30},
});
