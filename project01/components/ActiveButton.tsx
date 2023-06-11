import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';

const ActiveButton = () => {
  const [bio, setBio] = useState({
    age: 10,
    name: 'ali-raza',
  });
  const onPress = () =>
    setBio(prev => {
      return {
        ...prev,
        age: bio.age + 1,
        name: 'zaidi',
      };
    });

  const resetState = () => {
    setBio(prev => {
      return {
        ...prev,
        age: 10,
        name: 'aliraza',
      };
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {bio.age}</Text>

        <Text>name: {bio.name}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <View style={styles.newButton}>
        <Button title="Press me" onPress={resetState} />
      </View>
    </View>
  );
};

export default ActiveButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  newButton: {
    backgroundColor: 'green',
    marginTop:20
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
