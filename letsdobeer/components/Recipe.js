import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Recipe = (props) => {
  return (
    <View>
      <Text>{props.recipe.bier}</Text>
      <Text>{props.recipe.preparation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Recipe;
