import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import Screen from 'components/screens';
import { ESSbuild } from 'utils/stylesUtil';

declare const global: { HermesInternal: null | {} };

ESSbuild();

const App = () => {
  useEffect(() => {
    if (global.HermesInternal === null) {
      Alert.alert('Not Hermes!');
    }
  }, []);
  return <Screen />;
};

export default App;
