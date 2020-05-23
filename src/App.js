import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './pages/Home';
import { MineStackScreen } from './pages/Mine';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colorRed } from './config/color';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName = route.name === '首页' ? 'ios-home' : 'md-person'
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colorRed,
          inactiveTintColor: 'gray',
        }}
        >
        <Tab.Screen name="首页" component={HomeStackScreen} />
        <Tab.Screen name="我的" component={MineStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
