import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require('../assets/images/mw_logo.png')}
        />
      <Text style={{marginLeft: 10}}>美味不用等</Text>
    </View>
  );
}

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="首页"
        component={HomeScreen} 
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
    </HomeStack.Navigator>
  );
}
