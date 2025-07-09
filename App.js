import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaResumo from './screens/TelaResumo';
import TelaNovoGasto from './screens/TelaNovoGasto';
import TelaHistorico from './screens/TelaHistorico';
import TelaPerfil from './screens/TelaPerfil';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen name="Resumo" component={TelaResumo} />
        <Abas.Screen name="Novo Gasto" component={TelaNovoGasto} />
        <Abas.Screen name="Histórico" component={TelaHistorico} />
        <Abas.Screen name="Perfil" component={TelaPerfil} />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
