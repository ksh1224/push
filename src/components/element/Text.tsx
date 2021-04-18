import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import { black, ESS, REM } from 'utils/stylesUtil';

interface Props extends TextProps {
  children: ReactNode;
  family?: 'bold' | 'regular' | 'medium' | 'light';
  size?: number;
  color?: string;
}

export function CustomText(props: Props) {
  const { children, family, size, color, style } = props;
  let fontFamily = '$regular';
  switch (family) {
    case 'regular':
      fontFamily = '$regular';
      break;
    case 'bold':
      fontFamily = '$bold';
      break;
    case 'medium':
      fontFamily = '$medium';
      break;
    case 'light':
      fontFamily = '$light';
      break;
    default:
      break;
  }
  const styles = ESS({
    text: {
      fontFamily,
      fontSize: size || 14 * REM,
      color: color || black,
    },
  });
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}
