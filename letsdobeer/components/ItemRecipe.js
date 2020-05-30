import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import Colors from '../constants/colors';

const ItemRecipe = (props) => {
  return (
    <Card style={styles.card}>
      <View style={styles.item}>
        <Text style={styles.title}>{props.recipe.bier}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {backgroundColor: Colors.accent},
  item: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 16, fontWeight: 'bold', color: 'white'},
});

export default ItemRecipe;
