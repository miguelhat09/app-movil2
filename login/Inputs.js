import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'
import auth from '@react-native-firebase/auth';

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

   __doSingIn = async (email, password) => {
      try {
        let response = await auth().signInWithEmailAndPassword(email, password);
        if (response && response.user) {
          // Alert.alert('Success ✅', 'Autenticación hecha);
          this.props.navigation.navigate('Inicio');
          console.log('el usuario: ', response.user);
        }
      } catch (e) {
        this.setError('Correo y/o contraseña incorrectos');
        this.setValid(false);
      }
    };

   render() {
      return (
         <View style = {styles.container}>
            <Image style={styles.icono} source={require('../src/imgs/icono_user.png')}/>
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
                  () => this.__doSingIn(this.state.email, this.state.password)
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
       marginTop: 50,
       height: 40,
       alignItems: 'center',
       borderRadius: 50,
   },
   submitButtonText:{
       color: 'white'
   },
   registry: {
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        width: '50%',
        alignItems: 'center'
   },
   registryText: {
       color: '#87E0FF',
       fontSize: 15
   },
   icono: {
      width: 50,
      height: 50,
      opacity: 0.9
   }
});