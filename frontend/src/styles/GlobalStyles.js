import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0', // Fondo suave
    padding: 20,
  },
  button: {
    backgroundColor: '#FF6384', // Botón meloso
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFB6C1',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6384',
    marginBottom: 20,
    textAlign: 'center',
  },
});
