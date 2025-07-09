import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default function EntradaTexto({ rotulo, valor, aoMudarTexto, teclado }) {
  return (
    <View style={{ margin: 10 }}>
      <Text>{rotulo}</Text>
      <TextInput style={{ borderWidth: 1, padding: 5 }} value={valor} onChangeText={aoMudarTexto} keyboardType={teclado} />
    </View>
  );
}
