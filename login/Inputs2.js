import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import auth from '@react-native-firebase/auth';

class Inputs2 extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('Ingrese un correo electronico ' + ' y una contraseña')
   }

   __doCreateUser = async () => {
      try {
        let response = await auth().createUserWithEmailAndPassword(
          this.state.email,
          this.state.password,
        );
        // console.log('creando usuario ', response);
        if (response && response.user) {
          Alert.alert('Éxito ✅', 'Cuenta creada satisfactoriamente');
        }
        navigation.navigate('Login');
      } catch (e) {
        console.error(e.message);
      }
    };

   render() {
      return (
         <View style = {styles.container}>
            <Image style={styles.icono} source={require('../src/imgs/icono_registro.gif')}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Ingrese su correo"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Ingrese la Contrasena"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Repetir la Contraseña"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>   
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.__doCreateUser(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Registrarse </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs2

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      height: 360,
      width: 260,
      borderRadius: 5,
      marginTop: 30,
      marginBottom: 5,
      alignItems: 'center',
      justifyContent: 'center'
   },
   input: {
       width: '80%',
       margin: 10,
       height: 40,
       borderColor: 'lightgray',
       borderWidth: 1,
       padding: 10,
       borderRadius: 5
   },
   submitButton: {
       width: '60%',
       backgroundColor: 'black',
       padding: 10,
       marginTop: 30,
       height: 40,
       alignItems: 'center',
       borderRadius: 50
   },
   submitButtonText:{
       color: 'white'
   },
   icono: {
      width: 40,
      height: 40,
      marginTop: 5,
      opacity: 0.5
   }
});