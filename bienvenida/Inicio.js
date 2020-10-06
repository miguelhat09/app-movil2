import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextBase} from 'react-native';

const image = { uri: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&w=1000&q=80" };

class Inicio extends React.Component{
    render(){
        return (
        <View  style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.infocontainer1}>

                    <TouchableOpacity style={styles.boton}
                        onPress={() => this.props.navigation.navigate('Productos')}>
                        <Text style={styles.textoBoton}>Productos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton}
                        onPress={() => this.props.navigation.navigate('Usuarios')}>
                        <Text style={styles.textoBoton}>Usuarios</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.infocontainer2}>
                    <Text style={styles.titulo}>My Header</Text>
                    <Text style={styles.info}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis ullam asperiores
                        cum dignissimos repellat adipisci maxime ut assumenda
                        nemo eos. Sint numquam hic consequuntur, inventore illum 
                        laboriosam eum culpa impedit.
                    </Text>
                    <Text style={styles.titulo2}>My App</Text>
                    <Text style={styles.info2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis ullam asperiores
                        cum dignissimos repellat adipisci maxime ut assumenda
                        nemo eos. Sint numquam hic consequuntur.
                    </Text>
                </View>
                <View style={styles.containerleermas}>
                    <TouchableOpacity style={styles.boton2}>
                        <Text style={styles.textoBoton2}>Leer más</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        fontFamily: 'small-caps'
    },
    image: {
        resizeMode: "cover",
        height: 500
    },
    infocontainer1: {
        display: 'flex',
        alignItems: 'flex-start',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boton: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width: '45%',
        borderRadius: 3,
        margin: 12
    },
    textoBoton: {
        color: 'lightblue',
    },
    infocontainer2: {
        height: 275,
        alignItems: 'center'
    },
    titulo: {
        width: '80%',
        fontSize: 25,
        marginBottom: 10
    },  
    info: {
        height: 120,
        width: '80%'
    },
    titulo2: {
        width: '80%',
        fontSize: 18,
        marginBottom: 6
    },
    info2: {
        height: 68,
        width: '80%',
        fontSize: 11
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
    },
    textoBoton2: {
        color: 'black',
        fontSize: 11
    },
    containerleermas: {
        height: 35,
        alignItems: 'center'
    }
});

export default Inicio;