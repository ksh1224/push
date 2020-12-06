import {Dimensions, ImageStyle, TextStyle, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};
type AnyObject = {[key: string]: any};

export const REM = Dimensions.get('window').width / 414;
export const deviceHeight = Dimensions.get('window').height;

export function ESS<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
): AnyObject | T {
  return EStyleSheet.create(styles);
}

export const backgraoundColor = '#121212';
export const activeColor = '#4F59DC';

export const ESSbuild = () =>
  EStyleSheet.build({
    $rem: REM,
    $deviceHeight: deviceHeight,
    $activeColor: '#4F59DC',
    $backgraoundColor: '#121212',
    $cardColor: '#18171A',
    $disableColor: '#61627E',
    $a3: '#312E33',
    $a5: '#f7f9ff',
    $font: 'NotoSansKR-Regular',
    $fontMedium: 'NotoSansKR-Medium',
    $fontBold: 'NotoSansKR-Bold',
    $fontLight: 'NotoSansKR-Light',
  });
