import { useNavigation } from '@react-navigation/native';
import Header from 'components/Header';
import ListItemCard from 'components/item/ListItemCard';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { ESS, REM } from 'utils/stylesUtil';

const styles = ESS({
  root: {
    flex: 1,
    backgroundColor: '$backgraoundColor',
  },
  body: {
    flex: 1,
    padding: 20 * REM,
    paddingTop: 10 * REM,
    alignItems: 'center',
  },
  itemWrap: {},
  titleText: {
    fontFamily: '$bold',
    fontSize: 19 * REM,
    lineHeight: 23 * REM,
    color: '$mainColor',
  },
  infoText: {
    fontFamily: '$bold',
    fontSize: 15 * REM,
    lineHeight: 18 * REM,
    color: '$mainColor',
  },
});

export default function MissionSetting() {
  const navigation = useNavigation<RootStackkNavigationProps>();
  const missionType = {
    maxreps: 'maxreps',
    setreps: 'setreps',
    static: 'static',
    tabata: 'tabata',
    workOutTime: 'workOutTime',
  };

  return (
    <View style={styles.root}>
      <Header>{'미션 추가'}</Header>
      <View style={styles.body}>
        <ListItemCard style={styles.itemWrap}>
          <Text style={styles.titleText}>미션 타입</Text>
          <Text style={styles.infoText}>버티기 미션</Text>
        </ListItemCard>
        <ListItemCard>
          <Text style={styles.titleText}>운동 시간</Text>
          <Text style={styles.infoText}>00:00:00</Text>
        </ListItemCard>
        <ListItemCard onPress={() => navigation.pop()}>
          <Text style={styles.titleText}>휴식 시간</Text>
          <Text style={styles.infoText}>00:00:00</Text>
        </ListItemCard>
      </View>
    </View>
  );
}
