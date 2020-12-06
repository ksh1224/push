import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export {};

declare global {
  type AnyObject = {[key: string]: any};

  type RootStackParamList = {
    MainStack: undefined;
    Timer: undefined;
  };

  type MainStackParamList = {
    WorkOut: undefined;
    Mission: undefined;
    UserInfo: undefined;
    Setting: undefined;
    NotFound: undefined;
  };

  type RootStackkNavigationProps<
    T extends keyof RootStackParamList = 'MainStack'
  > = StackNavigationProp<RootStackParamList, T>;

  type RootRouteProps<
    T extends keyof RootStackParamList = 'MainStack'
  > = RouteProp<RootStackParamList, T>;

  type MainStackNavigationProps<
    T extends keyof MainStackParamList = 'WorkOut'
  > = BottomTabNavigationProp<MainStackParamList, T>;

  type MainRouteProps<
    T extends keyof MainStackParamList = 'WorkOut'
  > = RouteProp<MainStackParamList, T>;
}
