import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import bg from '../../../assets/bg.png'
import { useFonts } from 'expo-font';

import { authStyles } from '../../components/AuthComponents/authStyles';

const Login = ({ navigation }) => {

  const [loaded] = useFonts({
    'AlexLight': require('../../../assets/fonts/Alexandria-Light.ttf'),
    'AlexRegular': require('../../../assets/fonts/Alexandria-Regular.ttf'),
    'AlexBold': require('../../../assets/fonts/Alexandria-SemiBold.ttf')
  });
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí iría la lógica para autenticar al usuario 
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <ImageBackground source={bg} style={authStyles.background}>
    <View style={authStyles.container}>

      <Text style={authStyles.title}>Iniciar Sesión</Text>

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

      <Text style={[authStyles.title2, authStyles.boldText]} onPress={() => navigation.navigate('ForgotPassword')} >¿Has olvidado la contraseña?</Text>

      <TouchableOpacity style={authStyles.button} onPress={handleLogin}>
        <Text style={authStyles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={authStyles.title3}>¿No tienes una cuenta?
      <Text style={authStyles.boldText2} onPress={() => navigation.navigate('Signup')}>  Regístrate</Text>
      </Text>

    </View>

    </ImageBackground>
  );
};

export default Login;