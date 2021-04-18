import { Button } from 'components/element';
import Header from 'components/Header';
import MissionCard from 'components/item/MissionCard';
import TimeSettingModal from 'components/timer/TimeSettingModal';
import { under } from 'images';
import React from 'react';

import { ScrollView, View, Text, Image } from 'react-native';
import { ESS, REM } from 'utils/stylesUtil';

const styles = ESS({
  root: {
    flex: 1,
    backgroundColor: '$backgraoundColor',
  },
  missionScroll: {
    flex: 1,
  },
  cardScrollInside: {
    padding: 20 * REM,
    alignItems: 'center',
  },
  subTitle: {
    paddingTop: 10 * REM,
    paddingBottom: 25 * REM,
    fontSize: 20 * REM,
    fontFamily: '$bold',
    color: '$disableColor',
  },
  listItem: {
    width: 364 * REM,
    height: 73 * REM,
    marginBottom: 15 * REM,
    borderRadius: 10 * REM,
    paddingHorizontal: 20 * REM,
    backgroundColor: '$cardColor',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18 * REM,
    fontFamily: '$bold',
    color: '$mainColor',
  },
  under: {
    width: 100 * REM,
    height: 45 * REM,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20 * REM,
  },
  underImg: {
    tintColor: '$mainColor',
  },
});

export default function Mission() {
  return (
    <View style={styles.root}>
      <Header>진행중인 미션</Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.missionScroll}
        contentContainerStyle={styles.cardScrollInside}>
        <MissionCard />
        <Text style={styles.subTitle}>이전 미션</Text>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>미션 이름</Text>
          <Text style={[styles.listItemText, { fontSize: 14 * REM }]}>
            당첨자: 김둘리
          </Text>
        </View>
        <Button style={styles.under}>
          <Image style={styles.underImg} source={under} />
        </Button>
      </ScrollView>
      <TimeSettingModal visible />
    </View>
  );
}
