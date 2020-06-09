import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Header from './components/header/header'


export default function App() {
  const [todos , setTodos] = useState([
    {text: 'Take the rubbish out' , key: '1'},
    {text: 'Buy milk & coffee' , key: '2'},
    {text: 'Wash the car' , key: '3'},
  ])
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => <Text>{item.text}</Text> }             
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
