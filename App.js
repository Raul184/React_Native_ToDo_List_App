import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [ name , setName ] = useState('Test')
  const [ age , setAge ] = useState(0)
  return (
    <View style={styles.container}>
      <Text>Please provide your name:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='Your name'
        onChangeText={val => setName(val)}
      />
      <Text>Please provide your age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='Your name'
        onChangeText={val => setAge(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1 ,
    borderColor: '#777',
    padding: 8 ,
    margin:10,
    width: 200
  }
});
