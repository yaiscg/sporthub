import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet  } from 'react-native';
import bg from '../../../assets/bg.png'
import { useFonts } from 'expo-font';

import { Icon } from 'react-native-elements';

import { authStyles } from '../../components/AuthComponents/authStyles';

const Login = ({ navigation }) => {

  const [loaded] = useFonts({
    'AlexRegular': require('../../../assets/fonts/Alexandria-Regular.ttf'),
    'AlexBold': require('../../../assets/fonts/Alexandria-SemiBold.ttf')
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

      <View style={authStyles.inputContainer2}>
      <TextInput
        style={authStyles.input2}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />
      <Icon color="#949494"
        type="font-awesome"
        name={showPassword ? "eye-slash" : "eye"}
        onPress={() => setShowPassword(!showPassword)}
        containerStyle={authStyles.icon}
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