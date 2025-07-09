import React from 'react';
import { View, Text } from 'react-native';

export default function Cabecalho({ titulo }) {
  return (
    <View style={{ backgroundColor: '#eee', padding: 10 }}>
      <Text style={{ fontSize: 20 }}>{titulo}</Text>
    </View>
  );
}
