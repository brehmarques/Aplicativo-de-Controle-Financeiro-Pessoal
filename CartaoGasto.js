import React from 'react';
import { View, Text } from 'react-native';

export default function CartaoGasto({ descricao, valor, categoria }) {
  return (
    <View style={{ padding: 10, margin: 5, backgroundColor: '#ddd', borderLeftWidth: 5, borderLeftColor: valor < 0 ? 'red' : 'green' }}>
      <Text>{descricao} - R$ {valor}</Text>
      <Text>{categoria}</Text>
    </View>
  );
}
