import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
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
      alert('la cuenta ' + email + ', y/o la contraseña ' + pass + ' son incorrectas')
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Usuario"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Contraseña"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.forgot}
               onPress = {() => this.props.navigation.navigate('Registro')}>
               <Text style = {styles.forgotText}> Registrarse </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Entrar </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
       paddingTop: 10,
       backgroundColor: 'white',
       height: 380,
       width: 300,
       borderRadius: 5,
       marginTop: 30,
       marginBottom: 5,
       alignItems: 'center',
       justifyContent: 'center'
   },
   input: {
       width: '90%',
       margin: 20,
       height: 40,
       borderColor: 'lightgray',
       borderWidth: 1,
       padding: 10,
       borderRadius: 5
   },
   submitButton: {
       width: '70%',
       backgroundColor: 'black',
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
   }
});