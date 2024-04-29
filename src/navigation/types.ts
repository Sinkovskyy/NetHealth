import {FindByIpScreenProps} from '../screens/FindByIp/types';
import {MenuScreenProps} from '../screens/Menu/types';
import {MyIpInfoScreenProps} from '../screens/MyIpInfo/types';
import {TracerouteScreenProps} from '../screens/Traceroute/types';

export enum Screens {
  Menu = 'NetHealth',
  MyIpInfo = 'Моя IP адреса',
  FindIpInfo = 'Пошук по IP',
  SpeedTest = 'SpeedTest',
  Traceroute = 'Traceroute',
}

export type StackNavigatorScreens = {
  [Screens.Menu]: MenuScreenProps;
  [Screens.MyIpInfo]: MyIpInfoScreenProps;
  [Screens.FindIpInfo]: FindByIpScreenProps;
  [Screens.Traceroute]: TracerouteScreenProps;
};
