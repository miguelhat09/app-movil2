import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import InputsAgregar from './InputsAgregar';

const image = { uri: "https://thumbs.dreamstime.com/b/mantenga-la-campana-en-la-recepci%C3%B3n-del-hotel-con-el-fondo-del-hotel-71333795.jpg" };

class Agregar extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.viewForm}> 
                    <InputsAgregar/>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        flex: 1
    },
    image: {
        width: '100%',
        height: 500
    },
    viewForm: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Agregar;