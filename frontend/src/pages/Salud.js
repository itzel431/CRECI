import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';

export default function Salud() {
  const [record, setRecord] = useState({
    alergias: '',
    leche: '',
    pañales: '',
    vacunas: '',
    medicamentos: '',
  });
  const [healthRecords, setHealthRecords] = useState([]);

  const addHealthRecord = () => {
    if (Object.values(record).some((field) => field.trim() === '')) return;
    setHealthRecords([...healthRecords, { id: Date.now().toString(), ...record }]);
    setRecord({ alergias: '', leche: '', pañales: '', vacunas: '', medicamentos: '' });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Alergias"
        value={record.alergias}
        onChangeText={(text) => setRecord({ ...record, alergias: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de leche"
        value={record.leche}
        onChangeText={(text) => setRecord({ ...record, leche: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Talla de pañales"
        value={record.pañales}
        onChangeText={(text) => setRecord({ ...record, pañales: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Vacunas"
        value={record.vacunas}
        onChangeText={(text) => setRecord({ ...record, vacunas: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Medicamentos o tratamientos"
        value={record.medicamentos}
        onChangeText={(text) => setRecord({ ...record, medicamentos: text })}
      />
      <Button title="Agregar Registro" onPress={addHealthRecord} />
      <FlatList
        data={healthRecords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>Alergias: {item.alergias}</Text>
            <Text>Leche: {item.leche}</Text>
            <Text>Pañales: {item.pañales}</Text>
            <Text>Vacunas: {item.vacunas}</Text>
            <Text>Medicamentos: {item.medicamentos}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF7F0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  record: {
    backgroundColor: '#FFEFEE',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
