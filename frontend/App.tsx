import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Contenedor de navegación
import { createStackNavigator } from '@react-navigation/stack'; // Creador de stack de navegación
import LoginScreen from './screens/LoginScreen'; // Pantalla de login
import RegisterScreen from './screens/RegisterScreen'; // Pantalla de registro
import RutaScreen from './screens/RutaScreen';
import HorarioScreen from './screens/HorarioScreen';
import PerfilScreen from './screens/PerfilScreen';
import HistorialScreen from './screens/HistorialScreen';
import EditarScreen from './screens/EditarScreen';
import PaymentScreen from './screens/PaymentScreen';
// Define los tipos de las pantallas
type RootStackParamList = {
  Login: undefined; // Si la pantalla no recibe parámetros, es undefined
  Register: undefined; // Lo mismo para Register
  Ruta: undefined;
  Horario: undefined;
  Perfil: undefined;
  Historial: undefined;
  Editar: undefined;
  Payment: undefined;
};

// Crear el Stack Navigator y agregar el tipo
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Ruta" component={RutaScreen} />
        <Stack.Screen name="Horario" component={HorarioScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Historial" component={HistorialScreen} />
        <Stack.Screen name="Editar" component={EditarScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
