import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home';
import Episode from './pages/Episode';

const StackNavigator = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <StackNavigator.Screen name="home" component={Home} />
        <StackNavigator.Screen name="episode" component={Episode} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
