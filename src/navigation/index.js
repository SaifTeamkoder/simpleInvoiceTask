import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import splash from '../screens/auth/splash';

// auth


// index



import { navigationRef } from './rootNavigation';

const Stack = createStackNavigator();

const screenOptions = {
  presentation: 'modal',
  headerShown: false,
  gestureEnabled: true,
  cardShadowEnabled: false,
  cardOverlayEnabled: false,
  ...TransitionPresets.SlideFromRightIOS
};

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="splash">
        {/* <Stack.Screen name="splash" component={splash} /> */}
    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
