import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicial from './screens/PantallaInicial';
import Principal from './screens/Principal';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PantallaInicial" component={PantallaInicial} />
      <Stack.Screen name="Principal" component={Principal} />
    </Stack.Navigator>
  );
}
