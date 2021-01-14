import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Pic from './pic';
import List from './List';
import LocalPic from './LocalPic';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pic" component={Pic} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="LocalPic" component={LocalPic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
