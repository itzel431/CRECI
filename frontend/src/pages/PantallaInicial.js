import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PantallaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Creci</Text>
      <Text style={styles.subtitle}>Tu acompañante en el arte de ser mamá</Text>
      <Image source={require('../assets/icons/logocrechi.png')} style={styles.logo} />
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={styles.startText}>Empezar →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F0',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6384',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#FF6384',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  startText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
