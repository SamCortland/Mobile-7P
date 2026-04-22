import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import ScreenContainer from '../../components/ScreenContainer';
import { styles } from '../styles/formStyles';
import { TouchableOpacity } from 'react-native';

export default function FormScreen() {
  const [carro, setCarro] = useState('');
  const [cliente, setCliente] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleSalvar = async () => {
    try {
      await addDoc(collection(db, 'alugueis'), {
        carro, cliente, valor, data
      });
      Alert.alert('Sucesso', 'Aluguel registrado com sucesso!');
      setCarro(''); setCliente(''); setValor(''); setData('');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar registro.');
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Novo Aluguel</Text>
        <TextInput style={styles.input} placeholder="Nome do carro" value={carro} onChangeText={setCarro} />
        <TextInput style={styles.input} placeholder="Nome do cliente" value={cliente} onChangeText={setCliente} />
        <TextInput style={styles.input} placeholder="Valor do aluguel" value={valor} onChangeText={setValor} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Data do aluguel (DD/MM/AAAA)" value={data} onChangeText={setData} />
        <TouchableOpacity style={styles.buttonPrimary} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar Registro</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

