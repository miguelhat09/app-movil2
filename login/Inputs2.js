import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

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
                  () => this.login(this.state.email, this.state.password)
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
       paddingTop: 10,
       backgroundColor: 'white',
       height: 380,
       width: 300,
       borderRadius: 5,
       marginTop: 30,
       marginBottom: 10,
       alignItems: 'center',
       justifyContent: 'center'
   },
   input: {
       width: '90%',
       margin: 15,
       height: 40,
       borderColor: 'lightgray',
       borderWidth: 1,
       padding: 10,
       borderRadius: 5
   },
   submitButton: {
       width: '70%',
       backgroundColor: '#84DBF9',
       padding: 10,
       margin: 15,
       height: 40,
       alignItems: 'center',
       borderRadius: 50
   },
   submitButtonText:{
       color: 'white'
   },
   forgot: {
        margin: 10,
        borderColor: 'black'
   },
   forgotText: {
       color: 'lightblue'
   },
   icono: {
      width: 40,
      height: 40,
      marginTop: 5,
      opacity: 0.5
   }
});