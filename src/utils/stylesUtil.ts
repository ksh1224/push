import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
type AnyObject = { [key: string]: any };

export const REM = Dimensions.get('window').width / 414;
export const deviceHeight = Dimensions.get('window').height;

export function ESS<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
): AnyObject | T {
  return EStyleSheet.create(styles);
}

export const backgraoundColor = '#121212';
export const mainColor = '#4F59DC';
export const black = '#000';

export const ESSbuild = () =>
  EStyleSheet.build({
    $rem: REM,
    $deviceHeight: deviceHeight,
    $mainColor: mainColor,
    $backgraoundColor: backgraoundColor,
    $cardColor: '#18171A',
    $disableColor: '#61627E',
    $a3: '#312E33',
    $a5: '#f7f9ff',
    $regular: 'NotoSansKR-Regular',
    $medium: 'NotoSansKR-Medium',
    $bold: 'NotoSansKR-Bold',
    $light: 'NotoSansKR-Light',
  });
