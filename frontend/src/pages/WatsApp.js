import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, Linking } from 'react-native';

export default function WhatsApp() {
  const [contact, setContact] = useState('');
  const [contacts, setContacts] = useState([]);

  const addContact = () => {
    if (contact.trim()) {
      setContacts([...contacts, { id: Date.now().toString(), number: contact }]);
      setContact('');
    }
  };

  const sendMessage = (number) => {
    const url = `whatsapp://send?phone=${number}`;
    Linking.openURL(url).catch(() => {
      alert('Asegúrate de tener WhatsApp instalado.');
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número de teléfono"
        keyboardType="phone-pad"
        value={contact}
        onChangeText={setContact}
      />
      <Button title="Agregar Contacto" onPress={addContact} />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <Text>{item.number}</Text>
            <Button title="Enviar Mensaje" onPress={() => sendMessage(item.number)} />
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
  contact: {
    backgroundColor: '#FFEFEE',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
