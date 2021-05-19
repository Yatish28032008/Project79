import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import ExchangeScreen from './screens/ExchangeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpLoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen}
})

const AppContainer = createAppContainer(SwitchNavigator)
