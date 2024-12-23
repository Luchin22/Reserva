import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BusSeats = ({ navigation }) => {
  const handlePerfil = () => {
    navigation.navigate('Perfil');
  };

  const handleHorario = () => {
    navigation.navigate('Horario');
  };

  const handleHistorial = () => {
    navigation.navigate('Historial');
  };
  const handlePago = () => {
  
  
    navigation.navigate('Pago', {
      numTickets: numSeats,
      selectedSeats: selectedSeats,
    });
  };
  
  

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numSeats, setNumSeats] = useState(1); // Número de asientos seleccionados

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.length < numSeats || selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seatNumber)) {
          return prevSelectedSeats.filter((seat) => seat !== seatNumber);
        } else {
          return [...prevSelectedSeats, seatNumber];
        }
      });
    }
  };

  const renderSeats = () => {
    const rows = [];
    for (let i = 1; i <= 6; i++) {
      rows.push(
        <View key={i} style={styles.row}>
          <TouchableOpacity
            style={[styles.seat, selectedSeats.includes(i * 4 - 3) && styles.selectedSeat]}
            onPress={() => toggleSeat(i * 4 - 3)}
            disabled={selectedSeats.length >= numSeats && !selectedSeats.includes(i * 4 - 3)}
          >
            <Text style={styles.seatText}>{i * 4 - 3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.seat, selectedSeats.includes(i * 4 - 2) && styles.selectedSeat]}
            onPress={() => toggleSeat(i * 4 - 2)}
            disabled={selectedSeats.length >= numSeats && !selectedSeats.includes(i * 4 - 2)}
          >
            <Text style={styles.seatText}>{i * 4 - 2}</Text>
          </TouchableOpacity>
          <Text style={styles.pasillo}></Text>
          <TouchableOpacity
            style={[styles.seat, selectedSeats.includes(i * 4 - 1) && styles.selectedSeat]}
            onPress={() => toggleSeat(i * 4 - 1)}
            disabled={selectedSeats.length >= numSeats && !selectedSeats.includes(i * 4 - 1)}
          >
            <Text style={styles.seatText}>{i * 4 - 1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.seat, selectedSeats.includes(i * 4) && styles.selectedSeat]}
            onPress={() => toggleSeat(i * 4)}
            disabled={selectedSeats.length >= numSeats && !selectedSeats.includes(i * 4)}
          >
            <Text style={styles.seatText}>{i * 4}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return rows;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Selecciona la cantidad de asientos</Text>
      <Picker
        selectedValue={numSeats}
        style={styles.picker}
        onValueChange={(itemValue) => setNumSeats(itemValue)}
      >
        {[...Array(10).keys()].map((_, index) => (
          <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
        ))}
      </Picker>
      <Text style={styles.title}>Selecciona tus asientos</Text>
      {renderSeats()}
      <TouchableOpacity style={styles.button} onPress={handlePago}>
        <Text style={styles.buttonText}>Ver selección</Text>
      </TouchableOpacity>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  picker: {
    width: 150,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  seat: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  seatText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedSeat: {
    backgroundColor: '#5cb85c',
  },
  pasillo: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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

export default BusSeats;
