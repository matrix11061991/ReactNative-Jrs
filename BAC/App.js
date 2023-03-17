import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { MathScreen } from './screens/MathScreen';
import { PhysicsScreen } from './screens/PhysicsScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { TechnologyScreen } from './screens/TechnologyScreen';
import { ChapterScreen } from './screens/ChapterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Math" component={MathScreen} />
        <Stack.Screen name="Physics" component={PhysicsScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Technology" component={TechnologyScreen} />
        <Stack.Screen name="Chapter" component={ChapterScreen} />
        {/* Ajouter d'autres écrans pour chaque matière */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
