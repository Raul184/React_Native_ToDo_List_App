import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList , Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; 
import Header from './components/header/header'
import TodoForm from './components/TodoForm/TodoForm'
import TodoItem from './components/todoItem/TodoItem'

export default function App() {
  const [todos , setTodos] = useState([
    {text: 'Take the rubbish out' , key: '1'},
    {text: 'Buy milk & coffee' , key: '2'},
    {text: 'Wash the car' , key: '3'},
  ])

  const handlePress = key => {
    setTodos( prevState => {
      return prevState.filter(el => el.key != key)
    })
  }

  const addTodo = nueTodo => {
    if(nueTodo.length > 3){
      setTodos(prevState => [ 
        ...prevState , 
        {text: nueTodo , key: uuidv4()} 
      ])
    }
    else{
      console.log('running')
      Alert.alert('Ups','Please write a note to remember',[
        {text:'Ok' , onPress: () => console.log('chao!')}
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TodoForm add={addTodo}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => <TodoItem item={item} handle={handlePress}/> }             
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
    padding: 5
  },
  list: {
    marginTop: 15
  }
});
