import React from 'react';
import {StyleSheet} from 'react-native';
import ListRecipesScreen from './screens/ListRecipesScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipes">
        <Stack.Screen name="ListRecipesScreen" component={ListRecipesScreen} />
        <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
