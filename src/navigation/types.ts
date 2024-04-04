import {MenuScreenProps} from '../screens/Menu/types';
import {MyIpInfoScreenProps} from '../screens/MyIpInfo/types';

export enum Screens {
  Menu = 'NetHealth',
  MyIpInfo = 'My IP Info',
  FindIpInfo = 'Find IP Info',
  SpeedTest = 'SpeedTest',
}

export type StackNavigatorScreens = {
  [Screens.Menu]: MenuScreenProps;
  [Screens.MyIpInfo]: MyIpInfoScreenProps;
};
