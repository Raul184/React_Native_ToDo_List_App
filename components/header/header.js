import React from 'react'
import { StyleSheet , View , Text} from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do's</Text>      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingTop: 15,
    backgroundColor: 'lightblue'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20 ,
    fontWeight: 'bold'
  }
})
export default Header;