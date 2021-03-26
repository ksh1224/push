import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './MainNavigater';
import WorkOutList from 'components/screens/WorkOutList';
import Timer from 'components/screens/Timer';
import MissionSetting from 'components/screens/MissionSetting';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigater() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="WorkOutList" component={WorkOutList} />
      <Stack.Screen name="Timer" component={Timer} />
      <Stack.Screen name="MissionSetting" component={MissionSetting} />
    </Stack.Navigator>
  );
}
