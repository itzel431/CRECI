import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function Diario() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { id: Date.now().toString(), text: note }]);
      setNote('');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Mi Diario</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Escribe algo sobre tu bebé..."
        value={note}
        onChangeText={setNote}
      />
      <View style={{ marginBottom: 10 }}>
        <Button title="Agregar Nota" onPress={addNote} color="#FF6384" />
      </View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: '#FFEFEE', padding: 10, marginVertical: 5, borderRadius: 5 }}>
            {item.text}
          </Text>
        )}
      />
    </View>
  );
}
