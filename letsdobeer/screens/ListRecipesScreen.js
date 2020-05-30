import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import ItemRecipe from '../components/ItemRecipe';

function ListRecipesScreen({navigation}) {
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
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('RecipeDetailScreen', {recipe: item});
              }}>
              <ItemRecipe id={item.id} recipe={item.recipe} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
  },
  item: {
    width: 300,
    maxWidth: '100%',
  },
});

export default ListRecipesScreen;
