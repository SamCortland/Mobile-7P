import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import ScreenContainer from '../../components/ScreenContainer';
import { styles } from '../styles/loginStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace('MainApp');
    } catch (error) {
      Alert.alert('Erro', 'E-mail ou senha incorretos.');
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Locadora de Carros</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize="none" 
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          value={senha} 
          onChangeText={setSenha} 
          secureTextEntry 
        />

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonSecondary} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonTextSecondary}>Criar nova conta</Text>
        </TouchableOpacity>
        
      </View>
    </ScreenContainer>
  );
}