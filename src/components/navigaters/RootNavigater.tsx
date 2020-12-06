import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainNavigater';
import Timer from 'components/screens/Timer';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigater() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="Timer" component={Timer} />
    </Stack.Navigator>
  );
}
