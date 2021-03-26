import { useNavigation } from '@react-navigation/native';
import Button from 'components/element/Button';
import Header from 'components/Header';
import Cursor from 'components/timer/Cursor';
import React from 'react';

import { ScrollView, View, Text, Image } from 'react-native';
import { ESS, REM } from 'utils/stylesUtil';

const styles = ESS({
  root: {
    flex: 1,
    backgroundColor: '$backgraoundColor',
  },
  cardScroll: {
    flex: 1,
  },
  cardScrollInside: {
    paddingTop: 20 * REM,
    alignItems: 'center',
  },
  cardRow: {
    width: 363 * REM,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 27 * REM,
  },
  card: {
    width: 168 * REM,
    height: 168 * REM,
    borderRadius: 10 * REM,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$cardColor',
    elevation: 3,
  },
  cardText: {
    fontFamily: '$font',
    fontSize: 17 * REM,
    lineHeight: 20 * REM,
    color: '$activeColor',
  },
});

export default function WorkOut() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  return (
    <View style={styles.root}>
      <Header>운동 목록</Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.cardScrollInside}
        style={styles.cardScroll}>
        <View style={styles.cardRow}>
          <Button
            style={styles.card}
            onPress={() => navigation.push('WorkOutList')}>
            <Image source={require('images/tabata.png')} />
            <Text style={[styles.cardText, { marginTop: 10 * REM }]}>
              타바타
            </Text>
          </Button>
          <Button style={styles.card}>
            <Image source={require('images/static.png')} />
            <Text style={[styles.cardText, { marginTop: 10 * REM }]}>
              버티기
            </Text>
          </Button>
        </View>
        <View style={styles.cardRow}>
          <Button style={styles.card}>
            <Image source={require('images/set.png')} />
            <Text style={[styles.cardText, { marginTop: 5 * REM }]}>
              반복 세트
            </Text>
          </Button>
          <Button style={styles.card}>
            <Image source={require('images/max.png')} />
            <Text style={[styles.cardText, { marginTop: 5 * REM }]}>
              반복 최대
            </Text>
          </Button>
        </View>
        <View style={styles.cardRow}>
          <Button style={styles.card}>
            <Image source={require('images/timmer.png')} />
            <Text style={[styles.cardText, { marginTop: 12 * REM }]}>
              시간 측정
            </Text>
          </Button>
          <Button style={styles.card}>
            <Image source={require('images/schedule.png')} />
            <Text style={[styles.cardText, { marginTop: 12 * REM }]}>
              출석 체크
            </Text>
          </Button>
        </View>
      </ScrollView>
      {/* <Cursor radius={100} /> */}
    </View>
  );
}
