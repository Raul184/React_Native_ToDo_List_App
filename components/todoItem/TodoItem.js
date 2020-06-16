import React from 'react'
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

const TodoItem = ({item: {text , key} , handle}) => {
  return <TouchableOpacity onPress={() => handle(key)}>
    <View style={styles.item}>
      <MaterialIcons name='delete' size={18} color='#333' />
      <Text style={styles.text}>{text}</Text>
    </View>
</TouchableOpacity>
}
  

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 12,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flex:1,
    flexDirection:'row',
    alignContent:'center'
  },
  text: {
    marginLeft:10
  }
})

export default TodoItem;