import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextBase} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const image = { uri: "https://pix7.agoda.net/hotelImages/456/45606/45606_16041721140041569348.jpg" };

class Mapa extends React.Component{
    render(){
        return (
        <View  style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
            <MapView
            style={styles.mapa}
            initialRegion={{
                        latitude: 3.45006394386292,
                        longitude: -76.5404434204102,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
            }}
            showsTraffic={true}
            >
                <Marker
                draggable
                    coordinate={{
                        latitude: 3.45576888999939,
                        longitude: -76.5359971191405,
                    }}
                    title={'Hotel Marriot'}
                    pinColor={'green'}/>

                <Marker
                draggable
                    coordinate={{
                        latitude: 3.45006394386292,
                        longitude: -76.5391434204102,
                    }}
                    title={'Hotel Intercontinental'}
                    pinColor={'blue'}/>

                <Marker
                draggable
                    coordinate={{
                        latitude: 3.46042895317078,
                        longitude: -76.5316848754883,
                    }}
                    title={'Hotel Six Avenue'}
                    pinColor={'yellow'}/>  

                <Marker
                draggable
                    coordinate={{
                        latitude: 3.43282989311218,
                        longitude: -76.5274031494141,
                    }}
                    title={'Hotel La Luna'}
                    pinColor={'blue'}/>

                <Marker
                draggable
                    coordinate={{
                        latitude: 3.45825909957886,
                        longitude: -76.5287753540039,
                    }}
                    title={'Hotel Torre de Cali Plaza'}
                    pinColor={'red'}/>            

                <Marker
                draggable
                    coordinate={{
                        latitude: 3.45006394386292,
                        longitude: -76.5404434204102,
                    }}
                    title={'Hotel Dann Cali'}
                    pinColor={'yellow'}/>

                <Marker
                draggable
                    coordinate={{
                        latitude: 3.45967010307312,
                        longitude: -76.5330565307617,
                    }}
                    title={'Hotel Granada Real'}
                    pinColor={'red'}/>

                <Marker
                draggable
                    coordinate={{
                        latitude: 3.45366888999939,
                        longitude: -76.5379971191405,
                    }}
                    title={'Hotel Casa Farallones'}
                    pinColor={'blue'}/>
            </MapView>
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
    mapa:{
        height: 500
    }
});

export default Mapa;
