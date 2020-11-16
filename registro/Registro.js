import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import Inputs2 from '../login/Inputs2';

const image = { uri: "https://www.plazandorra.com/cache/df/68/df681b429aeca97acee7eb1bd3deaed3.jpg" };

class Registro extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View>
                    <Inputs2/>
                </View>
            </ImageBackground>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 520
    },
    textico: {
        textAlign: 'center',
        margin: 3,
        fontSize: 16,
        color: 'white'
    },
    image: {
        height: 500,
        resizeMode: "cover",
        alignItems: 'center'
    },
    boton: {
        alignItems: 'center',
        width: '45%'
    },
    textoBoton: {
        color: 'lightblue'
    }       
});

export default Registro;