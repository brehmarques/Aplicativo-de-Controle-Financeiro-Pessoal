import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import EntradaTexto from '../components/EntradaTexto';
import Botao from '../components/Botao';

export default function TelaNovoGasto({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');

  function adicionarGasto() {
    if (descricao && valor && categoria) {
      Alert.alert("Gasto adicionado");
      setDescricao('');
      setValor('');
      setCategoria('');
      navigation.navigate("Histórico");
    } else {
      Alert.alert("Preencha todos os campos");
    }
  }

  return (
    <View>
      <Cabecalho titulo="Novo Gasto" />
      <EntradaTexto rotulo="Descrição" valor={descricao} aoMudarTexto={setDescricao} />
      <EntradaTexto rotulo="Valor" valor={valor} aoMudarTexto={setValor} teclado="numeric" />
      <EntradaTexto rotulo="Categoria" valor={categoria} aoMudarTexto={setCategoria} />
      <Botao texto="Adicionar" aoPressionar={adicionarGasto} />
    </View>
  );
}
