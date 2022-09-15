import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// auth
import Splash from "../screens/auth";
import SignIn from "../screens/auth/signIn";
// home
import Home from "../screens/home/";
import InvoiceList from "../screens/home/invoiceList";
import InvoiceDetails from "../screens/home/invoiceDetails";
import CreateInvoice from "../screens/home/createInvoice";
// profile
import Profile from "../screens/profile/";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  cardShadowEnabled: false,
  cardOverlayEnabled: false,
};

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Invoice List" component={InvoiceList} options={{ headerShown: true }} />
      <Stack.Screen name="Invoice Details" component={InvoiceDetails} options={{ headerShown: true }} />
      <Stack.Screen name="Create Invoice" component={CreateInvoice} options={{ headerShown: true }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
