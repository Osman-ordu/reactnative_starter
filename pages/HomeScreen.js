// HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />     
    </View>

  )

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3333',
    flexDirection:'column',
    justifyContent:'center'
  },
  text:{
    textAlign:'center'
  }
})