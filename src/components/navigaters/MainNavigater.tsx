import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mission from 'components/main/Mission';
import WorkOut from 'components/main/WorkOut';
import UserInfo from 'components/main/UserInfo';
import Setting from 'components/main/Setting';
import BottomBar from 'components/BottomBar';

const Stack = createBottomTabNavigator<MainStackParamList>();

export default function MainNavigater({}) {
  return (
    <Stack.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Stack.Screen name="WorkOut" component={WorkOut} />
      <Stack.Screen name="Mission" component={Mission} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}
