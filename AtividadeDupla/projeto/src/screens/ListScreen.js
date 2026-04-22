import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import ScreenContainer from '../../components/ScreenContainer';
import { styles } from '../styles/listStyles';

export default function ListScreen() {
  const [alugueis, setAlugueis] = useState([]);

  useEffect(() => {
    const fetchAlugueis = async () => {
      const querySnapshot = await getDocs(collection(db, 'alugueis'));
      const lista = [];
      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setAlugueis(lista);
    };
    
    fetchAlugueis();
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Registros de Aluguéis</Text>
        <FlatList
          data={alugueis}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.textBold}>Carro: {item.carro}</Text>
              <Text>Cliente: {item.cliente}</Text>
              <Text>Valor: R$ {item.valor}</Text>
              <Text>Data: {item.data}</Text>
            </View>
          )}
        />
      </View>
    </ScreenContainer>
  );
}