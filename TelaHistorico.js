import React from 'react';
import { View, ScrollView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import CartaoGasto from '../components/CartaoGasto';

export default function TelaHistorico() {
  const lista = [
    { descricao: 'Mercado', valor: -50, categoria: 'Alimentação' },
    { descricao: 'Salário', valor: 200, categoria: 'Receita' }
  ];

  return (
    <ScrollView>
      <Cabecalho titulo="Histórico" />
      {lista.map((item, indice) => (
        <CartaoGasto key={indice} descricao={item.descricao} valor={item.valor} categoria={item.categoria} />
      ))}
    </ScrollView>
  );
}
