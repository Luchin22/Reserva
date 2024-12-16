import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

// import HomeScreen from './HomeScreen';
// import HistoryScreen from './HistoryScreen';
// import ProfileScreen from './ProfileScreen';
import HorarioScreen from './HorarioScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Historial') {
              iconName = 'history';
            } else if (route.name === 'Perfil') {
              iconName = 'account';
            } else if (route.name === 'Seleccionar') {
              iconName = 'clipboard-list';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Historial" component={HistoryScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} /> */}
        <Tab.Screen name="Seleccionar" component={HorarioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
