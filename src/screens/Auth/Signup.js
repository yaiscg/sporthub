import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import bg from '../../../assets/bg.png'

import { authStyles } from '../../components/AuthComponents/authStyles';

const Signup = ({ navigation }) => {
  
  const [names, setNames] = useState('');
  const [user, setUser] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  
  // FALTA

  const handleSignup = () => {
    console.log('Names:', names);
    console.log('User:', user);
    console.log('Birthdate:', birthdate);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log('Contraseña2:', password2);
  };

  return (
    <ImageBackground source={bg} style={authStyles.background}>
    <View style={authStyles.container2}>
      <Text style={authStyles.title}>Registro</Text>

      <View style={authStyles.inputContainer}>
        <TextInput
          style={authStyles.input}
          placeholder="Nombres"
          value={names}
          onChangeText={setNames}
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>
      <View style={authStyles.inputContainer}>
        <TextInput
          style={authStyles.input}
          placeholder="Usuario"
          value={names}
          onChangeText={setUser}
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>
      <View style={authStyles.inputContainer}>
        <TextInput
          style={authStyles.input}
          placeholder="Fecha de Nacimiento"
          value={birthdate}
          onChangeText={setBirthdate}
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>      
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
      <View style={authStyles.inputContainer}>
        <TextInput
          style={authStyles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={authStyles.inputContainer}>
        <TextInput
          style={authStyles.input}
          placeholder="Repetir Contraseña"
          value={password}
          onChangeText={setPassword2}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={authStyles.button} onPress={handleSignup}>
        <Text style={authStyles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <Text style={authStyles.title3}>¿Ya tienes cuenta?
      <Text style={authStyles.boldText2} onPress={() => navigation.navigate('Login')}>  Inicia Sesión</Text>
      </Text>

    </View>
    </ImageBackground>
  );
};

export default Signup;