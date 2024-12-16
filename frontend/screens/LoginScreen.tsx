import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar hook de navegación

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();  // Inicializar el hook de navegación

  const handleLogin = () => {
    console.log('Iniciar Sesión con:', email, password);
    navigation.navigate('Horario'); // Navegar a horario cuando se hace clic en "Iniciar Sesión"
  };
  
  const handleRegister = () => {
    // Navegar a la pantalla de registro cuando se hace clic en "Registrar"
    navigation.navigate('Register');
  };

  /**
   * Navega a la pantalla de "Olvidé mi Contraseña" para restablecer la contraseña
   * del usuario.
   */
  const handleForgotPassword = () => {
    console.log('Redirigir a Olvidé mi Contraseña');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.terminal-quitumbe.com%2Fcooperativa-chimborazo.php&psig=AOvVaw1nU39dxHHIw161h-MODS1C&ust=1734321304767000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjTkL7wqIoDFQAAAAAdAAAAABAE' }} // Agrega aquí tu logo real
        style={styles.logo}
      />

      {/* Título */}
      <Text style={styles.title}>Cooperativa Chimborazo</Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botón de Iniciar Sesión */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Opciones de Registro y Olvidé Contraseña */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.footerText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.footerText}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FAFC',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    color: '#2C3E50',
  },
  loginButton: {
    backgroundColor: '#3498DB',
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  footerText: {
    color: '#3498DB',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LoginScreen;
