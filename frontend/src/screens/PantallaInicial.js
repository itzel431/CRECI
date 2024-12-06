import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PantallaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logocrechi.png')} style={styles.logo} />
      <Text style={styles.title}>Creci</Text>
      <Text style={styles.subtitle}>Tu acompañante en el arte de ser mamá</Text>
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
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
  startButton: {
    backgroundColor: '#FF6384',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  startText: {
    color: '#fff',
    fontSize: 18,
  },
});
