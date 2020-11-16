import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';

const image = { uri: "https://image.freepik.com/vector-gratis/ilustracion-banner-fondo-negro-lujo-linea-deco-oro-art-deco-elegante_25989-204.jpg" };

class Agregar extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lionel_Messi_in_2018.jpg/220px-Lionel_Messi_in_2018.jpg',}}
                        />
                        <Text style={styles.textico}>Lionel Messi</Text>
                        <Text style={styles.ocupacion}>Futbolista</Text>
                        <TouchableOpacity style={styles.boton2}>
                            <Text style={styles.textoBoton2}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        <Image style={styles.imagenes} source={require('../src/imgs/fotocel-edit.jpg')}
                        />
                        <Text style={styles.textico}>Miguel Serrate</Text>
                        <Text style={styles.ocupacion}>Ingeniero</Text>
                        <TouchableOpacity style={styles.boton2}>
                            <Text style={styles.textoBoton2}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Image style={styles.imagenes} source={require('../src/imgs/andres.png')}
                        />
                        <Text style={styles.textico}>Andres Betan..</Text>
                        <Text style={styles.ocupacion}>Ingeniero</Text>
                        <TouchableOpacity style={styles.boton2}>
                            <Text style={styles.textoBoton2}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        <Image style={styles.imagenes} source={require('../src/imgs/mark.jpg')}
                        />
                        <Text style={styles.textico}>Mark Zucke..</Text>
                        <Text style={styles.ocupacion}>Director</Text>
                        <TouchableOpacity style={styles.boton2}>
                            <Text style={styles.textoBoton2}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textico: {
        textAlign: 'center',
        margin: 3,
        fontSize: 16,
        color: 'white'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center'
    },
    container1: {
        display: 'flex',
        alignItems: 'flex-start',
        height: 220,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container2: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        width: '40%',
        margin: 10,
        height: 190,
        borderRadius: 5
    },
    imagenes: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 20
    },
    ocupacion: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    boton2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CEC3F2',
        padding: 8,
        width: '70%',
        borderRadius: 3,
        marginTop: 5,
    },
    textoBoton2: {
        color: 'black',
        fontSize: 11
    }
});

export default Agregar;