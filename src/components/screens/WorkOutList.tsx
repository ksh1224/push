import { useNavigation } from '@react-navigation/native';
import { Button } from 'components/element';
import Header from 'components/Header';
import { right } from 'images';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ESS, REM } from 'utils/stylesUtil';

const styles = ESS({
  root: {
    flex: 1,
    backgroundColor: '$backgraoundColor',
  },
  list: {
    flex: 1,
  },
  listInner: {
    padding: 25 * REM,
  },
  listItem: {
    width: 364 * REM,
    height: 73 * REM,
    marginBottom: 15 * REM,
    borderRadius: 10 * REM,
    padding: 15 * REM,
    backgroundColor: '$cardColor',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  listItemText: {
    fontSize: 15 * REM,
    lineHeight: 18 * REM,
    fontFamily: '$bold',
    color: '$mainColor',
  },
  listItemRight: {
    position: 'absolute',
    height: 73 * REM,
    justifyContent: 'center',
    right: 15 * REM,
  },
  listItemRightImg: {
    tintColor: '$mainColor',
  },
});

export default function WorkOutList() {
  const navigation = useNavigation<RootStackkNavigationProps>();
  return (
    <View style={styles.root}>
      <Header
        type="list"
        onBack={() => navigation.pop()}
        onAdd={() => navigation.navigate('MissionSetting')}>
        {'버티기 미션'}
      </Header>
      <ScrollView style={styles.list} contentContainerStyle={styles.listInner}>
        <Button
          style={styles.listItem}
          onPress={() => navigation.navigate('Timer')}>
          <Text style={styles.listItemText}>미션 이름</Text>
          <Text style={styles.listItemText}>Time : 00:00:00</Text>
          <View style={styles.listItemRight}>
            <Image style={styles.listItemRightImg} source={right} />
          </View>
        </Button>
      </ScrollView>
    </View>
  );
}
