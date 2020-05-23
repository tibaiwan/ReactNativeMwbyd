import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}

export const MineStackScreen = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen
        name="我的"
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
}
