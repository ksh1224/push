import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Screen from 'components/screens';
import {ESSbuild} from 'utils/stylesUtil';

ESSbuild();

const App: () => Node = () => {
  return <Screen />;
};

export default App;
