import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './pages/Home';
import { MineStackScreen } from './pages/Mine';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
        <Tab.Screen name="首页" component={HomeStackScreen} />
        <Tab.Screen name="我的" component={MineStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
