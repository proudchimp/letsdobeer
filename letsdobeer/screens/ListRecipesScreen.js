import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import Recipe from '../components/Recipe';

const ListRecipesScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://us-central1-letsdobeer-abd67.cloudfunctions.net/recipe')
      .then((response) => response.json())
      .then((json) => setRecipes(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={recipes}
          renderItem={({item}) => <Recipe recipe={item} />}
          keyExtractor={(item, index) => index}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default ListRecipesScreen;
