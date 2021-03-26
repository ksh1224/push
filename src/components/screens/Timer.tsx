import {useNavigation} from '@react-navigation/native';
import Button from 'components/element/Button';
import Header from 'components/Header';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ESS, REM} from 'utils/stylesUtil';

const styles = ESS({
  root: {
    flex: 1,
    backgroundColor: '$backgraoundColor',
  },
  body: {
    flex: 1,
    paddingTop: 45 * REM,
  },
  bottom: {
    position: 'absolute',
    bottom: 70 * REM,
    width: '100%',
    paddingHorizontal: 20 * REM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '$cardColor',
    width: 173 * REM,
    height: 57 * REM,
    borderRadius: 10 * REM,
  },
  buttonText: {
    fontFamily: '$fontBold',
    color: '$activeColor',
    fontSize: 25 * REM,
    lineHeight: 30 * REM,
  },
});

export default function Timer() {
  const navigation = useNavigation<RootStackkNavigationProps>();
  const test = () => {
    let up = 0;
    setInterval(() => {
      console.log('test', up);
      up += 1;
    }, 1000);
  };
  return (
    <View style={styles.root}>
      <Header type="workout" onBack={() => navigation.pop()}>
        {'타이머 이름'}
      </Header>
      <View style={styles.body}>
        <View style={styles.bottom}>
          <Button style={styles.button} onPress={() => test()}>
            <Text style={styles.buttonText}>START</Text>
          </Button>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>RESET</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
