import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const TodoItem = ({item: {text , key} , handle}) => {
  return <TouchableOpacity onPress={() => handle(key)}>
    <Text style={styles.item}>{text}</Text>
</TouchableOpacity>
}
  

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 12,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})

export default TodoItem;