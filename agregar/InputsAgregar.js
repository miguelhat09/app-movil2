import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'

class InputsAgregar extends React.Component {

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nombre del Hotel"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Dirección"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Precio de alquiler"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />   

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Habitaciones disponibles"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />   

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Número de contacto"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {() => this.props.navigation.navigate('Inicio')}>
               <Text style = {styles.submitButtonText}> Guardar </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default InputsAgregar

const styles = StyleSheet.create({
   container: {
       backgroundColor: 'white',
       height: 400,
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
       marginTop: 20,
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