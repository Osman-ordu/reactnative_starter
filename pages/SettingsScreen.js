// SettingsScreen.js
import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Button  title="Go back to Home" onPress={() => navigation.navigate('Home')} />
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