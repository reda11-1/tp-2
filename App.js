import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
// import nommé depuis CardList.js
import { CardList } from './components/CardList.js';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar />
      <Navbar />
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f6f7fb' },
});
