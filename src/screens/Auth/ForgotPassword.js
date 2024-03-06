import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import bg from '../../../assets/bg.png'

import { authStyles } from '../../components/AuthComponents/authStyles';

const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    // Aquí iría la lógica para autenticar al usuario 
    console.log('Email:', email);
  };

  return (
    <ImageBackground source={bg} style={authStyles.background}>
    <View style={authStyles.container}>

      <Text style={authStyles.title}>Recupera tu cuenta</Text>

      <Text style={authStyles.title4}>Ingresa el correo electrónico asociado a tu cuenta.</Text>

      <View style={authStyles.inputContainer}>
        <TextInput
          style={authStyles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={authStyles.button} onPress={handleForgotPassword}>
        <Text style={authStyles.buttonText}>Enviar código</Text>
      </TouchableOpacity>

      <Text style={[authStyles.title5, authStyles.boldText]} onPress={() => navigation.navigate('Login')}>Volver</Text>

    </View>

    </ImageBackground>
  );
};

export default ForgotPassword;