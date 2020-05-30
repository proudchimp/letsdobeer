import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import ListRecipesScreen from './screens/ListRecipesScreen';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Recipes" />
      <ListRecipesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
