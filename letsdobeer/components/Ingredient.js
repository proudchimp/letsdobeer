import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ingredient = (props) => {
  return (
    <View>
      <Text>{props.ingredient.name}</Text>
      <Text>{props.ingredient.qnty}</Text>
      <Text>{props.ingredient.um}</Text>
      {props.ingredient.obs ? <Text>{props.ingredient.obs}</Text> : undefined}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ingredient;
