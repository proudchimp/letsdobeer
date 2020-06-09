import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Ingredient from '../components/Ingredient';
import Colors from '../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const RecipeDetailScreen = ({route, navigation}) => {
  const [recipe, setRecipe] = useState(route.params.recipe.recipe);
  const [showIngredient, setShowIngredient] = useState(false);
  const [showHops, setShowHops] = useState(false);
  const [showMalts, setShowMalts] = useState(false);
  const [showPreparation, setShowPreparation] = useState(false);
  const [showPrimming, setShowPrimming] = useState(false);

  const getIconTitle = (containerStatus) => {
    return (
      <Icon
        style={styles.ingredientTitle}
        name={containerStatus ? 'minus' : 'plus'}
        size={25}
      />
    );
  };

  const setIngredientContainerVisible = () => {
    setShowIngredient((value) => !value);
  };

  const setMaltsContainerVisible = () => {
    setShowMalts((value) => !value);
  };

  const setHopsContainerVisible = () => {
    setShowHops((value) => !value);
  };

  const setPreparationContainerVisible = () => {
    setShowPreparation((value) => !value);
  };

  const setPrimmingContainerVisible = () => {
    setShowPrimming((value) => !value);
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: recipe.img}} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{recipe.bier}</Text>
        </View>

        <View style={styles.detailContainer}>
          <TouchableOpacity onPress={setIngredientContainerVisible}>
            <View style={styles.ingredientContainer}>
              <View style={[styles.ingredientTitleContainer, styles.active]}>
                <Text style={styles.ingredientTitle}>Ingredientes</Text>
                {getIconTitle(showIngredient)}
              </View>
              <View style={showIngredient ? undefined : styles.hide}>
                <FlatList
                  data={recipe.ingredients}
                  renderItem={({item}) => (
                    <Ingredient id={item.name} ingredient={item} />
                  )}
                  keyExtractor={(item, index) => index.name}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={setMaltsContainerVisible}>
            <View style={styles.ingredientContainer}>
              <View style={[styles.ingredientTitleContainer, styles.active]}>
                <Text style={styles.ingredientTitle}>Maltes</Text>
                {getIconTitle(showMalts)}
              </View>
              <View style={showMalts ? undefined : styles.hide}>
                <FlatList
                  data={recipe.malts}
                  renderItem={({item}) => (
                    <Ingredient id={Math.random()} ingredient={item} />
                  )}
                  keyExtractor={(item, index) => item.name + item.qnty}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={setHopsContainerVisible}>
            <View style={styles.ingredientContainer}>
              <View style={[styles.ingredientTitleContainer, styles.active]}>
                <Text style={styles.ingredientTitle}>Lúpulos</Text>
                {getIconTitle(showHops)}
              </View>
              <View style={showHops ? undefined : styles.hide}>
                <FlatList
                  data={recipe.hops}
                  renderItem={({item}) => (
                    <Ingredient id={Math.random()} ingredient={item} />
                  )}
                  keyExtractor={(item, index) => item.name + item.qnty}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={setPreparationContainerVisible}>
            <View style={styles.ingredientContainer}>
              <View style={[styles.ingredientTitleContainer, styles.active]}>
                <Text style={styles.ingredientTitle}>Modo de Preparo</Text>
                {getIconTitle(showPreparation)}
              </View>
              <View style={showPreparation ? undefined : styles.hide}>
                <Text>{recipe.preparation}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={setPrimmingContainerVisible}>
            <View style={styles.ingredientContainer}>
              <View style={[styles.ingredientTitleContainer, styles.active]}>
                <Text style={styles.ingredientTitle}>Primming</Text>
                {getIconTitle(showPrimming)}
              </View>
              <View style={showPrimming ? undefined : styles.hide}>
                <Ingredient ingredient={recipe.primming} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center'},
  imageContainer: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.75,
    maxWidth: 600,
    maxHeight: 600,
  },
  titleContainer: {marginVertical: 20},
  title: {fontSize: 40, textAlign: 'center', fontWeight: 'bold'},
  detailContainer: {
    backgroundColor: Colors.secondary,
    width: '90%',
    marginBottom: 20,
  },
  ingredientContainer: {
    paddingBottom: 15,
    marginBottom: 1,
  },
  ingredientTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ingredientTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  hide: {display: 'none'},
  active: {backgroundColor: Colors.primary},
});

export default RecipeDetailScreen;
