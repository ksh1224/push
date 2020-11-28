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

export const ESSbuild = () =>
  EStyleSheet.build({
    $rem: REM,
    $deviceHeight: deviceHeight,
    $defaultColor: 'rgb(239,243,255)',
    // $defaultFont: 'NanumSquareL',
    // $defaultFontRegular: 'NanumSquareR',
    // $defaultFontBold: 'NanumSquareB',
  });
