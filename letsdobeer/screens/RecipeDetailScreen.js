import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import Card from '../components/Card';
import Ingredient from '../components/Ingredient';

const RecipeDetailScreen = ({route, navigation}) => {
  const [recipe, setRecipe] = useState(route.params.recipe.recipe);
  return (
    <ScrollView>
      <Card>
        <View>
          <Text>Cerveja</Text>
          <View>
            <Text>{recipe.bier}</Text>
          </View>
        </View>

        <View>
          <Text>Ingredientes</Text>
          <View>
            <FlatList
              data={recipe.ingredients}
              renderItem={({item}) => (
                <Ingredient id={item.name} ingredient={item} />
              )}
              keyExtractor={(item, index) => index.name}
            />
          </View>
        </View>

        <View>
          <Text>Maltes</Text>
          <View>
            <FlatList
              data={recipe.malts}
              renderItem={({item}) => (
                <Ingredient id={Math.random()} ingredient={item} />
              )}
              keyExtractor={(item, index) => item.name + item.qnty}
            />
          </View>
        </View>

        <View>
          <Text>Lúpulos</Text>
          <View>
            <FlatList
              data={recipe.hops}
              renderItem={({item}) => (
                <Ingredient id={Math.random()} ingredient={item} />
              )}
              keyExtractor={(item, index) => item.name + item.qnty}
            />
          </View>
        </View>

        <View>
          <Text>Modo de Preparo</Text>
          <View>
            <Text>{recipe.preparation}</Text>
          </View>
        </View>

        <View>
          <Text>Primming</Text>
          <View>
            <Ingredient ingredient={recipe.primming} />
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default RecipeDetailScreen;
