import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ActiveButton = () => {
  const [bio, setBio] = useState({
    age: 10,
    name: 'aliraza',
  });
  const onPress = () =>
    setBio(prev => {
      return {
        ...prev,
        age: bio.age + 1,
        name: 'zaidi',
      };
    });
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
      
        <Text>Count: {bio.age}</Text>
        
        <Text>name: {bio.name}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
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
