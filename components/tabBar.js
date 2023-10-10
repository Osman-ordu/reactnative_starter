import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabBar({ onHomePress, onSearchPress, onSettingsPress }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', backgroundColor: '#333', padding: 10}}>
      <TouchableOpacity onPress={onHomePress}>
        <Ionicons name="home" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSearchPress}>
        <Ionicons name="search" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSettingsPress}>
        <Ionicons name="settings" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
