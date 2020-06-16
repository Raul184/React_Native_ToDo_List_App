import React , { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'; 
import Header from './components/header/header'
import TodoForm from './components/TodoForm/TodoForm'
import TodoItem from './components/todoItem/TodoItem'

export default function App() {
  const [todos , setTodos] = useState([])

  const handlePress = key => {
    setTodos( prevState => {
      return prevState.filter(el => el.key != key)
    })
  }

  const addTodo = nueTodo => {
    if(nueTodo.length > 3){
      setTodos([ 
        ...todos , 
        {
          text: nueTodo , 
          key: JSON.stringify(Math.round(Math.random() * 10000))
        } 
      ])
    }
    else{
      Alert.alert('Ups','Please write a note to remember',[
        {text:'Ok' , onPress: () => console.log('chao!')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoForm add={addTodo}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} handle={handlePress}/>
              )}             
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    padding: 12
  },
  list: {
    flex:1,
    marginTop: 15
  }
});
