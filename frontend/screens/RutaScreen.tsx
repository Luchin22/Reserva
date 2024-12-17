import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 



const RouteListScreen = ({ navigation, route }) => {
  const { selectedOrigin, selectedDestination } = route.params; // Recibir los datos

  const [selectedRow, setSelectedRow] = useState(null);
  const handlePerfil = () => {
    navigation.navigate('Perfil',{
  
    });  
  }
  
  const handleHorario = () => {
    navigation.navigate('Horario');
  }
  const handleHistorial = () => {
    navigation.navigate('Historial');
  }

  const routes = [
    { id: 1, departure: '08:20', duration: '2:10', availableSeats: '20' },
    { id: 2, departure: '11:00', duration: '2:15', availableSeats: '12' },
    { id: 3, departure: '14:45', duration: '2:15', availableSeats: '15' },
    { id: 4, departure: '18:00', duration: '2:10', availableSeats: '18' },
  ];

  const handleSelectRow = (id) => {
    setSelectedRow(id === selectedRow ? null : id); // Toggle row selection
  };

  const handleConfirm = () => {
    // Navegar a la pantalla 'Horario' y pasar la ruta seleccionada
    navigation.navigate('Horario', { selectedRoute: routes.find(route => route.id === selectedRow) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Consulta de Disponibilidad de Rutas</Text>

      {/* Mostrar las ciudades seleccionadas */}
      <View style={styles.routeDetailsContainer}>
        <Text style={styles.routeDetailsTitle}>Rutas</Text>
        <TextInput
          style={styles.routeDetailsText}
          value={` ${selectedOrigin} - ${selectedDestination}`}
          editable={false}
        />
      </View>

      {/* Contenido */}
      <ScrollView style={styles.tableContainer}>
        {/* Cabecera de la tabla */}
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Salida</Text>
          <Text style={styles.tableHeaderText}>Duración</Text>
          <Text style={styles.tableHeaderText}>Disponible</Text>
        </View>

        {/* Filas de la tabla */}
        {routes.map((route) => (
          <TouchableOpacity
            key={route.id}
            style={[styles.tableRow, selectedRow === route.id && styles.selectedRow]} // Cambiar estilo si la fila está seleccionada
            onPress={() => handleSelectRow(route.id)}
          >
            <Text style={styles.tableText}>{route.departure}</Text>
            <Text style={styles.tableText}>{route.duration}</Text>
            <Text style={styles.tableText}>{route.availableSeats} asientos</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Botón Confirmar */}
      {selectedRow && (
        <TouchableOpacity style={styles.buttonConfirm} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      )}
      {/* Nueva barra de navegación (footer) */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleHorario}>
          <Icon name="home" size={30} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleHistorial}>
          <Icon name="history" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePerfil}>
          <Icon name="person" size={30} color="black" />
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004C4C',
    padding: 10,
  },
  header: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  tableContainer: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2E8B57',
    paddingVertical: 10,
    marginBottom: 10,
  },
  tableHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectedRow: {
    backgroundColor: '#add8e6',
  },
  tableText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonConfirm: {
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  routeDetailsContainer: {
    marginBottom: 20,
  },
  routeDetailsTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  routeDetailsText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default RouteListScreen;
