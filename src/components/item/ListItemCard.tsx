import Button from 'components/element/Button';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ESS, REM } from 'utils/stylesUtil';

const styles = ESS({
  card: {
    width: 364 * REM,
    padding: 20 * REM,
    borderRadius: 10 * REM,
    backgroundColor: '$cardColor',
    elevation: 3,
    alignItems: 'center',
    marginBottom: 20 * REM,
  },
});

type Props = {
  onPress?: () => void;
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
};

export default function ListItemCard({ onPress, children, style }: Props) {
  return (
    <Button style={[styles.card, style]} onPress={() => onPress && onPress()}>
      {children}
    </Button>
  );
}
