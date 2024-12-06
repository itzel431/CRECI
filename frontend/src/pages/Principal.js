import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Principal({ navigation }) {
  const sections = [
    { name: 'Diario', icon: 'notebook-outline', screen: 'Diario' },
    { name: 'Momentos', icon: 'image-outline', screen: 'Momentos' },
    { name: 'Salud', icon: 'heart-outline', screen: 'Salud' },
    { name: 'Lactancia', icon: 'baby-bottle-outline', screen: 'Lactancia' },
    { name: 'Crecimiento', icon: 'chart-bar', screen: 'Crecimiento' },
    { name: 'WhatsApp', icon: 'whatsapp', screen: 'WhatsApp' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creci</Text>
      <View style={styles.grid}>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(section.screen)}
          >
            <Icon name={section.icon} size={36} color="#FF6384" />
            <Text style={styles.cardText}>{section.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6384',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '40%',
    backgroundColor: '#FFEFEE',
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6384',
  },
});
