import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Momentos() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [moments, setMoments] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addMoment = () => {
    if (image && description.trim()) {
      const newMoment = {
        id: Date.now().toString(),
        image,
        description,
        date: new Date().toLocaleString(),
      };
      setMoments([...moments, newMoment]);
      setImage(null);
      setDescription('');
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Seleccionar una foto" onPress={pickImage} />
      <TextInput
        style={styles.input}
        placeholder="Descripción..."
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Guardar Momento" onPress={addMoment} />
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.moment}>
            <Image source={{ uri: item.image }} style={styles.thumbnail} />
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  moment: {
    marginBottom: 10,
    backgroundColor: '#FFEFEE',
    padding: 10,
    borderRadius: 5,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});
