import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import Login from './login/Login';
import Inicio from './bienvenida/Inicio';
import Hoteles from './hoteles/Hoteles';
import Agregar from './agregar/Agregar';
import Registro from './registro/Registro';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
          />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          />
          <Stack.Screen 
          name="Hoteles" 
          component={Hoteles}
          option={{title: 'Hoteles'}}
          />
          <Stack.Screen 
          name="Agregar" 
          component={Agregar}
          option={{title: 'Agregar Hoteles'}}
          />
          <Stack.Screen
          name="Registro"
          component={Registro}
          options={{title: 'Registro'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container: {
      backgroundColor: 'lightgray',
      flex: 1,
  }
});

export default App;
