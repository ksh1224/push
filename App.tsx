import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Screen from 'screens';
import {ESS, ESSbuild} from 'utils/stylesUtil';

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
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <NavigationContainer>
          <Screen />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
