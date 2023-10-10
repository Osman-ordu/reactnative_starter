// App.js
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import SearchScreen from './pages/SearchScreen';
import SettingsScreen from './pages/SettingsScreen';
import TabBar from './components/tabBar';


const Stack = createStackNavigator();

export default function App() {
  return (
 

     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>

      <TabBar style={styles.tabBarContainer}/>
    </NavigationContainer>
  

    
  );
}
const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    width: '100%',
    alignItems:'flex-end',
    bottom: 0
  }
})