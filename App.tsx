import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';
import Screen from 'components/screens';
import {backgraoundColor, ESS, ESSbuild} from 'utils/stylesUtil';

declare const global: {HermesInternal: null | {}};

ESSbuild();

const styles = ESS({
  root: {
    flex: 1,
  },
});

const App = () => {
  useEffect(() => {
    if (global.HermesInternal === null) {
      Alert.alert('Not Hermes!');
    }
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={backgraoundColor} />
      <SafeAreaView style={styles.root}>
        <Screen />
      </SafeAreaView>
    </>
  );
};

export default App;
