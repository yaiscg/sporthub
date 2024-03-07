import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import bg from '../../../assets/bg.png'
import { useFonts } from 'expo-font';

import { Icon } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { authStyles } from '../../components/AuthComponents/authStyles';

const Signup = ({ navigation }) => {

  const [loaded] = useFonts({
    'AlexRegular': require('../../../assets/fonts/Alexandria-Regular.ttf'),
    'AlexBold': require('../../../assets/fonts/Alexandria-SemiBold.ttf')
  });
  
  const [names, setNames] = useState('');
  const [user, setUser] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  
  //FECHA ----------------------------------------
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const hideDatePickerModal = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    hideDatePickerModal();
    setDate(currentDate);
  };

  const formatDate = (date) => {
    // Aquí puedes formatear la fecha según tus necesidades
    return date.toLocaleDateString();
  };

  ////////// FALTA

  const handleSignup = () => {
    console.log('Names:', names);
    console.log('User:', user);
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
        placeholder="Fecha de Nacimiento"
        value={formatDate(date)}
        editable={false}
      />
      <TouchableOpacity onPress={showDatePickerModal} style={{ padding: 10}}>
        <MaterialCommunityIcons name="calendar" size={28} color="#949494"  />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
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

      <View style={authStyles.inputContainer2}>
      <TextInput
        style={authStyles.input2}
        placeholder="Repetir Contraseña"
        value={password2}
        onChangeText={setPassword2}
        secureTextEntry={!showPassword2}
      />
      <Icon color="#949494"
        type="font-awesome"
        name={showPassword2 ? "eye-slash" : "eye"}
        onPress={() => setShowPassword2(!showPassword2)}
        containerStyle={authStyles.icon}
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