import {MainScreenProps} from '../screens/Main/types';

export enum Screens {
  Main = 'Main',
}

export type StackNavigatorScreens = {
  [Screens.Main]: MainScreenProps;
};
