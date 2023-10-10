// SearchScreen.js
import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';


export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Search Screen</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
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