import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../components/Cabecalho';

export default function TelaResumo() {
  const receitas = 200;
  const despesas = 100;
  const saldo = receitas - despesas;
  const percentualGasto = (despesas / receitas) * 100;

  return (
    <View style={{ padding: 20 }}>
      <Cabecalho titulo="Resumo" />

      <View style={estilos.card}>
        <Text style={estilos.label}>Receitas: R$ {receitas}</Text>
        <Text style={estilos.label}>Despesas: R$ {despesas}</Text>
        <Text style={[estilos.label, { color: saldo >= 0 ? 'green' : 'red' }]}>
          Saldo: R$ {saldo}
        </Text>
      </View>

      <Text style={{ marginTop: 20 }}>Gasto até agora:</Text>
      <View style={estilos.barra}>
        <View style={[estilos.preenchido, { width: `${percentualGasto}%` }]} />
      </View>
      <Text>{percentualGasto.toFixed(0)}%</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  barra: {
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5
  },
  preenchido: {
    height: '100%',
    backgroundColor: '#6200ee'
  }
});
