import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Botao({ texto, aoPressionar }) {
  return (
    <TouchableOpacity onPress={aoPressionar} style={{ backgroundColor: '#6200ee', padding: 10, margin: 10 }}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{texto}</Text>
    </TouchableOpacity>
  );
}
