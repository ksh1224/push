import { useNavigation } from '@react-navigation/native';
import { Button, CustomText } from 'components/element';
import Header from 'components/Header';
import { tabata, max, timmer, schedule, staticImg, setImg } from 'images';
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
    fontSize: 17 * REM,
    lineHeight: 20 * REM,
    color: '$mainColor',
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
            <Image source={tabata} />
            <Text style={[styles.cardText, { marginTop: 10 * REM }]}>
              타바타
            </Text>
          </Button>
          <Button style={styles.card}>
            <Image source={staticImg} />
            <Text style={[styles.cardText, { marginTop: 10 * REM }]}>
              버티기
            </Text>
          </Button>
        </View>
        <View style={styles.cardRow}>
          <Button style={styles.card}>
            <Image source={setImg} />
            <Text style={[styles.cardText, { marginTop: 5 * REM }]}>
              반복 세트
            </Text>
          </Button>
          <Button style={styles.card}>
            <Image source={max} />
            <Text style={[styles.cardText, { marginTop: 5 * REM }]}>
              반복 최대
            </Text>
          </Button>
        </View>
        <View style={styles.cardRow}>
          <Button style={styles.card}>
            <Image source={timmer} />
            <CustomText style={[styles.cardText, { marginTop: 12 * REM }]}>
              시간 측정
            </CustomText>
          </Button>
          <Button style={styles.card}>
            <Image source={schedule} />
            <CustomText style={[styles.cardText, { marginTop: 12 * REM }]}>
              출석 체크
            </CustomText>
          </Button>
        </View>
      </ScrollView>
      {/* <Cursor radius={100} /> */}
    </View>
  );
}
