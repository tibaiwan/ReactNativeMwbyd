import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersonCenterHear } from '../components/PersonCenterHear';
import { PersonCenterFuncItem } from '../components/PersonCenterFuncItem';

const SettingsStack = createStackNavigator();

function PersonCenter({ navigation }) {
  return (
    <View style={{backgroundColor: '#FAFAFA'}}>
      <PersonCenterHear />
      <View style={{height: 10}}></View>
      <PersonCenterFuncItem />
    </View>
  );
}

export const PersonCenterScreen = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen
        name="我的"
        component={PersonCenter}
      />
    </SettingsStack.Navigator>
  );
}
