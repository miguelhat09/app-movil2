import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Inputs from './Inputs';

const image = { uri: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&w=1000&q=80" };

class Login extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View>
                    <Inputs navigation={this.props.navigation}/>
                </View>

                <TouchableOpacity style={styles.boton}
                    onPress={() => this.props.navigation.navigate('Inicio')}>
                    <Text style={styles.textoBoton}>Inicio</Text>
                </TouchableOpacity>
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

export default Login;