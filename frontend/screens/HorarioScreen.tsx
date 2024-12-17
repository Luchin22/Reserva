import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HorarioScreen = ({ navigation }) => {

  const handleRuta = () => {
    // Enviar los datos seleccionados a RouteListScreen
    navigation.navigate('Ruta', {
      selectedOrigin: selectedOrigin,
      selectedDestination: selectedDestination,
    });
  };
  const handlePerfil = () => {
      navigation.navigate('Perfil',{

      });  
  }

  const handleHistorial = () => {
    navigation.navigate('Historial');
  }
  const data = [
    { id: '1', origin: 'Cuenca', destination: 'Quito', distance: '500 km', status: 'Activo' },
    { id: '2', origin: 'Guayaquil', destination: 'Cuenca', distance: '200 km', status: 'No Activo' },
    { id: '3', origin: 'Riobamba', destination: 'Ambato', distance: '100 km', status: 'Activo' },
    { id: '4', origin: 'Cuenca', destination: 'Quito', distance: '500 km', status: 'No Activo' },
    { id: '5', origin: 'Guayaquil', destination: 'Cuenca', distance: '200 km', status: 'Activo' },
  ];

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const cities = [
    'Cuenca', 'Guayaquil', 'Riobamba', 'Quito', 'Ambato', 'Loja',
    'Manta', 'Esmeraldas', 'Machala', 'Tulcán', 'Ibarra', 'Azogues',
    'Latacunga', 'Portoviejo', 'Salinas', 'Santo Domingo', 'Puyo', 'Macas', 'Zamora'
  ];

  const filterData = (origin, destination) => {
    const filtered = data.filter(
      (item) =>
        (origin === '' || item.origin === origin) &&
        (destination === '' || item.destination === destination)
    );
    setFilteredData(filtered);
  };

  const handleOriginChange = (itemValue) => {
    setSelectedOrigin(itemValue);
    setSelectedDestination('');
    filterData(itemValue, '');
  };

  const handleDestinationChange = (itemValue) => {
    setSelectedDestination(itemValue);
    filterData(selectedOrigin, itemValue);
  };

  const handleRowSelect = (item) => {
    setSelectedRow(item.id === selectedRow?.id ? null : item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selecciona un Transporte</Text>
      <Text style={styles.filterLabel}>Ciudad de Salida</Text>
      <Picker
        selectedValue={selectedOrigin}
        onValueChange={handleOriginChange}
        style={styles.picker}
      >
        <Picker.Item label="Seleccione una ciudad" value="" />
        {cities.map((city, index) => (
          <Picker.Item key={index} label={city} value={city} />
        ))}
      </Picker>

      <Text style={styles.filterLabel}>Ciudad de Destino</Text>
      <Picker
        selectedValue={selectedDestination}
        onValueChange={handleDestinationChange}
        style={styles.picker}
        enabled={!!selectedOrigin}
      >
        <Picker.Item label="Seleccione una ciudad" value="" />
        {cities.filter((city) => city !== selectedOrigin).map((city, index) => (
          <Picker.Item key={index} label={city} value={city} />
        ))}
      </Picker>

      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.row, selectedRow?.id === item.id ? styles.selectedRow : null]}
              onPress={() => handleRowSelect(item)}
            >
              <Text style={styles.tableText}>{item.origin}</Text>
              <Text style={styles.tableText}>{item.destination}</Text>
              <Text style={styles.tableText}>{item.distance}</Text>
              <Text
                style={[styles.tableText, item.status === 'Activo' ? styles.activeStatus : styles.inactiveStatus]}
              >
                {item.status}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noResultsText}>No se encontraron los resultados solicitados</Text>
      )}

      {selectedRow && (
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleRuta}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      )}
         {/* Nueva barra de navegación (footer) */}
         <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleHistorial}>
          <Icon name="history" size={30} color="black" />
        </TouchableOpacity>
       <TouchableOpacity
          onPress={handlePerfil}
        >
          <Icon name="person" size={30} color="black" />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterLabel: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    color: '#212121',
    borderRadius: 5,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableText: {
    color: '#000',
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  selectedRow: {
    backgroundColor: '#87CEFA', // Azul claro para resaltar la fila seleccionada
  },
  activeStatus: {
    color: 'blue',
  },
  inactiveStatus: {
    color: 'red',
  },
  noResultsText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
    // Tus estilos existentes
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
});

export default HorarioScreen;
