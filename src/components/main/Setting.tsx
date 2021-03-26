import Header from 'components/Header';
import React from 'react';

import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {ESS, REM} from 'utils/stylesUtil';

const styles = ESS({
  root: {
    flex: 1,
    backgroundColor: '$backgraoundColor',
  },
});

export default function Setting() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.root}>
      <Header>환경설정</Header>
    </ScrollView>
  );
}
