import React, { useEffect, useState } from 'react';

import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { ESS, REM } from 'utils/stylesUtil';

const styles = ESS({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5 * REM,
  },
});

type Props = {
  children: string | number | JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  noneBlock?: boolean;
};

export default function Button({ children, style, onPress, noneBlock }: Props) {
  const [block, setBlock] = useState(false);

  useEffect(() => {
    const delayClick = setTimeout(() => setBlock(false), 200);
    return () => clearTimeout(delayClick);
  }, [block]);

  const click = () => {
    if (!noneBlock) {
      setBlock(true);
    }
    onPress && onPress();
  };

  return (
    <Pressable style={[styles.button, style]} onPress={() => !block && click()}>
      {children}
    </Pressable>
  );
}
