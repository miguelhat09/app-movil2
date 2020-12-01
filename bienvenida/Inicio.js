import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextBase} from 'react-native';

const image = { uri: "https://pix7.agoda.net/hotelImages/456/45606/45606_16041721140041569348.jpg" };

class Inicio extends React.Component{
    render(){
        return (
        <View  style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.titulo}>APARMENT</Text>
                <View style={styles.infocontainer1}>

                    <TouchableOpacity style={styles.boton}
                        onPress={() => this.props.navigation.navigate('Hoteles')}>
                        <Text style={styles.textoBoton}>Hoteles</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton}
                        onPress={() => this.props.navigation.navigate('Agregar')}>
                        <Text style={styles.textoBoton}>Agregar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton}
                    onPress={() => this.props.navigation.navigate('Mapa')}>
                    <Text style={styles.textoBoton}>Mapa</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.infocontainer2}>
                    <Text style={styles.info}>
                        Bienvenidos a Aparment, esta es una App para que los usuarios puedan
                        alquilar habitaciones en un hotel y de igual manera,
                        para usuarios que desean poner en alquiler una habitación.
                    </Text>
                </View>
                </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        fontFamily: 'Arial'
    },
    image: {
        resizeMode: "cover",
        height: 460
    },
    infocontainer1: {
        display: 'flex',
        alignItems: 'flex-start',
        height: 95,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boton: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 12,
        width: '32%',
        borderRadius: 50,
        margin: 15
    },
    textoBoton: {
        color: 'white',
        fontSize: 15
    },
    infocontainer2: {
        height: 230,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    titulo: {
        width: '100%',
        fontSize: 25,
        marginTop: 15,
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius: 2,
    },  
    info: {
        height: 180,
        width: '80%',
        color: 'white',
        textShadowColor:'black',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius: 2,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    titulo2: {
        width: '100%',
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    info2: {
        height: 68,
        width: '80%',
        color: 'black',
        fontWeight: 'bold'
    },
    boton2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CEC3F2',
        padding: 15,
        width: '80%',
        borderRadius: 3,
        marginTop: 5,
    }
});

export default Inicio;