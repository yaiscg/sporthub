import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover', // O 'stretch', 'repeat', etc.
      justifyContent: 'center',
    },
    inputContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginBottom: 13,
    },
    inputContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#ccc',
      marginBottom: 13,
      marginRight:21,
      marginLeft:21,
    },
    input2: {
      width: 250,
      height: 40,
      flex: 1,
      paddingHorizontal: 10,
      marginBottom: 5,
      fontSize: 15,
    },
    input: {
      width: 250,
      height: 40,
      fontSize: 15,
      paddingHorizontal: 10,
      marginBottom: 5,
    },
    icon: {
      marginRight:11
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 60,
      paddingHorizontal: 10,
      backgroundColor: "white",
      borderRadius: 50,
      marginRight:25,
      marginLeft:25
    },
    container2: {
      marginTop: 55,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: "white",
      borderRadius: 50,
      marginRight:25,
      marginLeft:25
    },
    title: {
      fontSize: 26,
      marginBottom: 15,
      color: "#333333",
      fontFamily: "AlexBold",
    },
    title2: {
      fontSize: 15,
      marginBottom: 12,
      marginStart: 10,
      marginVertical: 15,
      color: "#333333"
    },
    title3: {
      fontSize: 15,
      marginBottom: 5,
      marginStart: 10,
      marginVertical: 15,
      color: "#333333"
    },
    title4: {
      textAlign: 'center',
      fontSize: 15,
      marginBottom: 30,
      marginStart: 30,
      marginVertical: 10,
      color: "#333333",
      marginRight:30,
      marginLeft:35
    },
    title5: {
      marginRight:40,
      marginLeft:35,
      fontSize: 18,
      marginBottom: 5,
      marginStart: 10,
      marginVertical: 15,
      color: "#333333"
    },
    button: {
      backgroundColor: '#333333',
      width: 160,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      marginTop: 10,
      marginBottom:8
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
      fontFamily: "AlexRegular",
    },
    boldText: {
      fontWeight: "bold",
    },
    boldText2: {
      fontWeight: "900",
    },
    
  });
