import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/Login';
import CadastroScreen from './pages/Cadastro';
import EsqueceuScreen from './pages/EsqueceuSenha';
import ListarContatos from './pages/ListarContatos';
import CadastroContato from './pages/CadastroContatos';
import EditarContato from './pages/EditarContato';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuScreen} />
        <Stack.Screen name="ListarContatos" component={ListarContatos} options={{ headerShown: false }} />
        <Stack.Screen name="CadastrarContato" component={CadastroContato} />
        <Stack.Screen name="EditarContato" component={EditarContato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
