import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RootNavigater from 'components/navigaters/RootNavigater';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { backgraoundColor, ESS } from 'utils/stylesUtil';

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
    <>
      <StatusBar barStyle="light-content" backgroundColor={backgraoundColor} />
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
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
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
