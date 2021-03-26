import Button from 'components/element/Button';
import React from 'react';
import {View, Text} from 'react-native';
import {backgraoundColor, ESS, REM} from 'utils/stylesUtil';

const styles = ESS({
  card: {
    width: 364 * REM,
    padding: 20 * REM,
    borderRadius: 10 * REM,
    backgroundColor: '$cardColor',
    elevation: 3,
    alignItems: 'flex-start',
    marginBottom: 15 * REM,
  },
  topWrap: {
    height: 22 * REM,
    width: '100%',
    paddingBottom: 10 * REM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentsText: {
    fontFamily: '$fontMedium',
    fontSize: 15 * REM,
    lineHeight: 18 * REM,
    color: '$activeColor',
  },
  bottomWrap: {
    height: 20 * REM,
    width: '100%',
    paddingTop: 10 * REM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function MissionCard() {
  return (
    <Button style={styles.card} onPress={() => console.log('mission')}>
      <View style={styles.topWrap}>{/*  */}</View>
      <Text style={styles.contentsText}>sss</Text>
      <View style={styles.bottomWrap}>{/*  */}</View>
    </Button>
  );
}
