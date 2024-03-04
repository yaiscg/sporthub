import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import bg from '../../../assets/bg.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí iría la lógica para autenticar al usuario 
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <ImageBackground source={bg} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.title2}>¿Has olvidado la contraseña?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      <Text style={styles.title3}>¿No tienes una cuenta? Regístrate</Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // O 'stretch', 'repeat', etc.
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 70,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 50,
    marginRight:20,
    marginLeft:20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#333333"
  },
  title2: {
    fontSize: 14,
    marginBottom: 12,
    marginStart: 10,
    marginVertical: 15,
    color: "#333333"
  },
  title3: {
    fontSize: 14,
    marginBottom: 5,
    marginStart: 10,
    marginVertical: 15,
    color: "#333333"
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#333333',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    marginBottom:8
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;