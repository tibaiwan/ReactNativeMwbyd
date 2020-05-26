import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersonCenterHeader } from '../components/PersonCenterHeader';
import { PersonCenterFuncItems } from '../components/PersonCenterFuncItems';

const SettingsStack = createStackNavigator();

function PersonCenter({ navigation }) {
  return (
    <View style={{backgroundColor: '#FAFAFA'}}>
      <PersonCenterHeader />
      <View style={{height: 10}}></View>
      <PersonCenterFuncItems navigation={navigation}/>
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
