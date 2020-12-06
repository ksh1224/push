import React from 'react';

import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ESS, REM, activeColor} from 'utils/stylesUtil';
import Button from './element/Button';

const styles = ESS({
  header: {
    width: '100%',
    height: 112 * REM,
    marginTop: 20 * REM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerHeader: {
    width: '100%',
    height: 90 * REM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 15 * REM,
    top: undefined,
    bottom: undefined,
    padding: 10 * REM,
  },
  backButtonImg: {
    tintColor: '$activeColor',
  },
  headerText: {
    fontSize: 26 * REM,
    fontFamily: 'fontBold',
    fontWeight: 'bold',
    color: '$disableColor',
  },
  bottomLine: {
    bottom: -2 * REM,
    width: '100%',
    height: 2 * REM,
  },
});

type HeaderType = {
  children?: string;
  type?: 'default' | 'timer';
  onBack?: () => void;
};

export default function Header({children, type, onBack}: HeaderType) {
  let header = styles.header;
  switch (type) {
    case 'timer':
      header = styles.timerHeader;
      console.log('timer');
      break;

    default:
      break;
  }
  return (
    <>
      <View style={header}>
        {type === 'timer' && (
          <Button onPress={() => onBack && onBack()} style={styles.backButton}>
            <Image
              style={styles.backButtonImg}
              source={require('images/back.png')}
            />
          </Button>
        )}
        <Text
          style={[styles.headerText, type === 'timer' && {color: activeColor}]}>
          {children}
        </Text>
      </View>
      {type === 'timer' && (
        <LinearGradient
          colors={['rgba(97,98,126,0.2)', 'rgba(97,98,126,0)']}
          style={styles.bottomLine}
        />
      )}
    </>
  );
}
