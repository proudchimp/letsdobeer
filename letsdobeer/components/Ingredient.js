import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ingredient = (props) => {
  return (
    <View style={styles.ingredientContainer}>
      <Text style={styles.text}>{props.ingredient.name} </Text>
      <Text style={styles.text}>{props.ingredient.qnty} </Text>
      <Text style={styles.text}>{props.ingredient.um}</Text>
      {props.ingredient.obs ? <Text>, {props.ingredient.obs}</Text> : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 2,
  },
  text:{fontSize:15}
});

export default Ingredient;
