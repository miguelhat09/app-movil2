import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import Inputs2 from '../login/Inputs2';

const image = { uri: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&w=1000&q=80" };

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