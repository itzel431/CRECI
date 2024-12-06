import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';

export default function Crecimiento() {
  const [data, setData] = useState({
    peso: '',
    estatura: '',
    pañales: '',
  });
  const [records, setRecords] = useState([]);

  const addRecord = () => {
    if (Object.values(data).some((field) => field.trim() === '')) return;
    setRecords([...records, { id: Date.now().toString(), ...data }]);
    setData({ peso: '', estatura: '', pañales: '' });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={data.peso}
        onChangeText={(text) => setData({ ...data, peso: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Estatura (cm)"
        value={data.estatura}
        onChangeText={(text) => setData({ ...data, estatura: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Talla de pañales"
        value={data.pañales}
        onChangeText={(text) => setData({ ...data, pañales: text })}
      />
      <Button title="Agregar Registro" onPress={addRecord} />
      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>Peso: {item.peso} kg</Text>
            <Text>Estatura: {item.estatura} cm</Text>
            <Text>Talla de pañales: {item.pañales}</Text>
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
