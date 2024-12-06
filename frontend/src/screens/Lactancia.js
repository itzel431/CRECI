import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function Lactancia() {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [records, setRecords] = useState([]);

  const toggleTimer = () => {
    if (isRunning) {
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000; // In seconds
      setRecords([
        ...records,
        {
          id: Date.now().toString(),
          start: startTime.toLocaleString(),
          end: endTime.toLocaleString(),
          duration: `${Math.floor(duration / 60)} min ${Math.floor(duration % 60)} sec`,
        },
      ]);
      setIsRunning(false);
      setStartTime(null);
    } else {
      setStartTime(new Date());
      setIsRunning(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {isRunning ? 'Cronómetro corriendo...' : 'Cronómetro detenido'}
      </Text>
      <Button title={isRunning ? 'Detener' : 'Iniciar'} onPress={toggleTimer} />
      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>Inicio: {item.start}</Text>
            <Text>Fin: {item.end}</Text>
            <Text>Duración: {item.duration}</Text>
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
  timer: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  record: {
    backgroundColor: '#FFEFEE',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
