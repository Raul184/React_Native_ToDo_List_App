import React , {useState} from 'react'
import {View,TextInput,StyleSheet,Button} from 'react-native'

const TodoForm = ({add}) => {
  const [ todo , setNueTodo ] = useState('')

  const addTodo = nueTodo => {
    add(nueTodo)
    setNueTodo('')
  }
  return (
    <View>
      <TextInput
        style={styles.input} 
        placeholder='Add a todo'
        onChangeText={val => setNueTodo(val)}
      />
      <Button 
        onPress={() => addTodo(todo)}
        title='Add'
        color='lightgreen'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    marginBottom:10,
    paddingHorizontal:8,
    paddingTop:30,
    borderBottomWidth:1,
    borderBottomColor:'#ddd'
  }
})

export default TodoForm;