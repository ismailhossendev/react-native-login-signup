import * as react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './components/About';
import Welcome from './components/Welcome';
import { StyleSheet } from 'react-native';
import SignUp from './components/SignUp';
import Login from './components/Login';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='home'
          component={Welcome}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name='signup' component={SignUp} />
        <Stack.Screen name='login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}