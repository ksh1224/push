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
  addButton: {
    position: 'absolute',
    right: 15 * REM,
    bottom: undefined,
    padding: 10 * REM,
  },
  buttonImg: {
    tintColor: '$activeColor',
  },
  headerText: {
    fontSize: 26 * REM,
    fontFamily: 'fontBold',
    fontWeight: 'bold',
    color: '$disableColor',
  },
  bottomLine: {
    width: '100%',
    height: 2 * REM,
  },
  innerHeaderColor: {
    backgroundColor: '$cardColor',
  },
});

type HeaderType = {
  children?: string;
  type?: 'default' | 'list' | 'workout';
  onBack?: () => void;
  onAdd?: () => void;
};

export default function Header({
  children,
  type = 'default',
  onBack,
  onAdd,
}: HeaderType) {
  let headerStyle = styles.header;
  switch (type) {
    case 'workout':
      headerStyle = [styles.timerHeader, styles.innerHeaderColor];
      console.log('workout');
      break;
    case 'list':
      headerStyle = [styles.timerHeader, styles.innerHeaderColor];
      console.log('list');
      break;
  }
  return (
    <>
      <View style={headerStyle}>
        {type !== 'default' && (
          <Button onPress={() => onBack && onBack()} style={styles.backButton}>
            <Image
              style={styles.buttonImg}
              source={require('images/back.png')}
            />
          </Button>
        )}
        <Text
          style={[
            styles.headerText,
            type !== 'default' && {color: activeColor},
          ]}>
          {children}
        </Text>
        {type === 'list' && (
          <Button onPress={() => onAdd && onAdd()} style={styles.addButton}>
            <Image
              style={styles.buttonImg}
              source={require('images/addWorkout.png')}
            />
          </Button>
        )}
      </View>
      {type !== 'default' && (
        <LinearGradient
          colors={['rgba(97,98,126,0.2)', 'rgba(97,98,126,0)']}
          style={styles.bottomLine}
        />
      )}
    </>
  );
}
