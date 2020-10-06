import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'

class Inputs extends React.Component {
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
   login = () => {
      alert('El usuario ' + ' y/o la contraseña ' + ' son incorrectos')
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
               style = {styles.registry}
               onPress = {() => this.props.navigation.navigate('Registro')}>
               <Text style = {styles.registryText}> Registrarse </Text>
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
       marginTop: 25,
       height: 40,
       alignItems: 'center',
       borderRadius: 50
   },
   submitButtonText:{
       color: 'white'
   },
   registry: {
        margin: 10,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        width: '50%',
        alignItems: 'center'
   },
   registryText: {
       color: '#87E0FF',
       fontSize: 15
   }
});