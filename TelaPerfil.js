import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import EntradaTexto from '../components/EntradaTexto';
import Botao from '../components/Botao';

export default function TelaPerfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View>
      <Cabecalho titulo="Perfil" />
      <Image source={{ uri: 'https://i.pravatar.cc/150?img=5' }} style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', margin: 10 }} />
      <EntradaTexto rotulo="Nome" valor={nome} aoMudarTexto={setNome} />
      <EntradaTexto rotulo="Email" valor={email} aoMudarTexto={setEmail} teclado="email-address" />
      <Botao texto="Salvar" aoPressionar={() => {}} />
    </View>
  );
}
