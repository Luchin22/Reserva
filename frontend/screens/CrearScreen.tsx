import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Alert,
} from 'react-native';

const CreateScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentType, setCurrentType] = useState('');
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({
    conductor: [],
    bus: [],
    ruta: [],
    horario: [],
  });

  const fields = {
    conductor: ['Nombre', 'DNI', 'Teléfono', 'Licencia'],
    bus: ['Placa', 'Marca', 'Modelo', 'Capacidad', 'Estado'],
    ruta: ['Origen', 'Destino', 'Distancia (km)', 'Estado'],
    horario: ['Hora de Salida', 'Hora de Llegada'],
  };

  const openModal = (type) => {
    setCurrentType(type);
    setFormData({});
    setModalVisible(true);
  };

  const saveData = () => {
    if (Object.values(formData).some((value) => value.trim() === '')) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    setData((prevData) => ({
      ...prevData,
      [currentType]: [...prevData[currentType], formData],
    }));
    setModalVisible(false);
  };

  const renderTable = (type) => (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        {fields[type].map((header) => (
          <Text key={header} style={styles.tableHeaderCell}>
            {header}
          </Text>
        ))}
      </View>
      <FlatList
        data={data[type]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            {fields[type].map((field, index) => (
              <Text key={index} style={styles.tableCell}>
                {item[field.toLowerCase()]}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Crear Conductor */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Crear Conductor</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openModal('conductor')}
        >
          <Text style={styles.buttonText}>Crear</Text>
        </TouchableOpacity>
        {renderTable('conductor')}
      </View>

      {/* Crear Bus */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Crear Bus</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openModal('bus')}
        >
          <Text style={styles.buttonText}>Crear</Text>
        </TouchableOpacity>
        {renderTable('bus')}
      </View>

      {/* Crear Ruta */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Crear Ruta</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openModal('ruta')}
        >
          <Text style={styles.buttonText}>Crear</Text>
        </TouchableOpacity>
        {renderTable('ruta')}
      </View>

      {/* Crear Horario */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Crear Horario</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openModal('horario')}
        >
          <Text style={styles.buttonText}>Crear</Text>
        </TouchableOpacity>
        {renderTable('horario')}
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Crear {currentType}</Text>
            {fields[currentType]?.map((field) => (
              <TextInput
                key={field}
                style={styles.input}
                placeholder={field}
                value={formData[field.toLowerCase()] || ''}
                onChangeText={(text) =>
                  setFormData({
                    ...formData,
                    [field.toLowerCase()]: text,
                  })
                }
              />
            ))}
            <TouchableOpacity style={styles.button} onPress={saveData}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  cancelButton: {
    backgroundColor: '#FF5722',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tableContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default CreateScreen;
