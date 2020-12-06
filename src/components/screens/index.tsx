import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootNavigater from 'components/navigaters/RootNavigater';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {backgraoundColor, ESS} from 'utils/stylesUtil';

const styles = ESS({
  root: {
    flex: 1,
    backgroundColor: '$backgraoundColor',
  },
  page: {
    flex: 1,
  },
});

export default function Main() {
  return (
    <View style={styles.root}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={{
            colors: {
              ...DefaultTheme.colors,
              background: backgraoundColor,
            },
            dark: true,
          }}>
          <RootNavigater />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}
