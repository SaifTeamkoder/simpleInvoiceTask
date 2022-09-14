import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignIn from '../screens/auth/signIn';

// auth

// index

import {navigationRef} from './rootNavigation';

const Stack = createStackNavigator();

const screenOptions = {
  presentation: 'modal',
  headerShown: false,
  gestureEnabled: true,
  cardShadowEnabled: false,
  cardOverlayEnabled: false,
  ...TransitionPresets.SlideFromRightIOS,
};

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="SignIn">
        {/* <Stack.Screen name="splash" component={splash} /> */}
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
