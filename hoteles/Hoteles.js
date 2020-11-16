import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const image = { uri: "https://image.freepik.com/vector-gratis/ilustracion-banner-fondo-negro-lujo-linea-deco-oro-art-deco-elegante_25989-204.jpg" };

class Hoteles extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <ScrollView style={{width: 315}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.textico}>Zephyrus Duo</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://files.lafm.com.co/assets/public/styles/image_631x369/public/2020-07/zephyrus-duo_0.jpg?itok=Grd98Ld7',}}/>

                        <Text style={styles.textico}>PC gamer I5</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://pcware.com.co/wp-content/uploads/2018/07/pc-gamer-i5-8400-intel-octava-generacion_g_700x700-300x300.jpg',}}/>

                        <Text style={styles.textico}>Ergonomus Malta</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://image.made-in-china.com/202f0j10cDJRSkmsLTbu/Customize-Hot-Sale-2D-Armrest-Ergonomic-Silla-Gamer-PC-Gaming-Chair.jpg',}}/>

                        <Text style={styles.textico}>AMD Radeon RX</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://siliconnews.plataformasinc.es/wp-content/uploads/2019/08/7-tarjetas-de-v%C3%ADdeo-para-tu-PC-gamer-que-debes-tener.jpg',}}/>          
                    </View>
                </ScrollView>
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
    textico: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        padding: 5,
        marginTop: 20
    },
    image: {
        alignItems: 'center',
        resizeMode: 'cover'
    },
    imagenes: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginBottom: 20
    }
});

export default Hoteles;