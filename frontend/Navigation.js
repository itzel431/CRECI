import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Diario from './screens/Diario';
import Momentos from './screens/Momentos';
import Salud from './screens/Salud';
import Lactancia from './screens/Lactancia';
import Crecimiento from './screens/Crecimiento';
import WhatsApp from './screens/WatsApp';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Diario':
              iconName = 'notebook-outline';
              break;
            case 'Momentos':
              iconName = 'image-outline';
              break;
            case 'Salud':
              iconName = 'heart-outline';
              break;
            case 'Lactancia':
              iconName = 'baby-bottle-outline';
              break;
            case 'Crecimiento':
              iconName = 'chart-bar';
              break;
            case 'WhatsApp':
              iconName = 'whatsapp';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: '#FFB6C1' },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FF6384',
        headerStyle: { backgroundColor: '#FF6384' },
        headerTitleStyle: { color: '#FFFFFF' },
      })}
    >
      <Tab.Screen name="Diario" component={Diario} />
      <Tab.Screen name="Momentos" component={Momentos} />
      <Tab.Screen name="Salud" component={Salud} />
      <Tab.Screen name="Lactancia" component={Lactancia} />
      <Tab.Screen name="Crecimiento" component={Crecimiento} />
      <Tab.Screen name="WhatsApp" component={WhatsApp} />
    </Tab.Navigator>
  );
}
