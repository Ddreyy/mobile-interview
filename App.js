import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Contact from './screens/Contact';

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {backgroundColor: 'green'}
      }}>
        <Stack.Screen  name='Home' component={Home}/>
        <Stack.Screen name='Contact' component={Contact}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


