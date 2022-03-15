import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#1d1d2e'} barStyle="light-content" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}

