import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import ListScreen from '../screens/ListScreen';

import DrawerModalNavigator from './DrawerModalNavigator';
import DrawerScrollNavigator from './DrawerScrollNavigator';

import { theme } from '../styles/theme';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.white,
        headerTitleAlign: 'center',
        drawerActiveTintColor: theme.colors.primary,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="Registrar Aluguel" component={FormScreen} />
      <Drawer.Screen name="Ver Aluguéis" component={ListScreen} />
      <Drawer.Screen name="Modais" component={DrawerModalNavigator} options={{ title: 'Modais' }} />
      <Drawer.Screen name="Scrolls" component={DrawerScrollNavigator} options={{ title: 'Listas (Scroll)' }} />
    </Drawer.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      
      <Stack.Screen name="MainApp" component={DrawerMenu} />
    </Stack.Navigator>
  );
}