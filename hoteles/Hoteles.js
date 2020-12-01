import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Modal, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const image = { uri: "https://thumbs.dreamstime.com/b/mantenga-la-campana-en-la-recepci%C3%B3n-del-hotel-con-el-fondo-del-hotel-71333795.jpg" };

class Hoteles extends React.Component{
    constructor()
    {
        super()
        this.state={
            showMe:false,
            showMe2:false,
            showMe3:false,
            showMe4:false,
            showMe5:false,
            showMe6:false,
            showMe7:false,
            showMe8:false,
        }
    }

    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <ScrollView style={{width: 315}}>
                    <View style={styles.view1}>
                        <Text style={styles.textico}>Cali Marriot Hotel</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/26/26/2626992_v7.jpeg',}}/>

                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                    <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>Cali Marriot Hotel</Text>
                                <Text>Pago de alojamiento $296.505</Text>
                                <Text>A 1.5 Km del centro de la ciudad</Text>
                                <Text>15 habitaciones disponibles</Text>
                                <Text>Telefono: 3456721</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

                        <Text style={styles.textico}>InterContinental Cali</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/10/33/103350_v3.jpeg',}}/>
                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe2:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe2} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>InterContinental Cali</Text>
                                <Text>Pago de alojamiento $292.566</Text>
                                <Text>A 2.0 Km del centro de la ciudad</Text>
                                <Text>12 habitaciones disponibles</Text>
                                <Text>Telefono: 3126809</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe2:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

                        <Text style={styles.textico}>Six Avenue</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/27/72/2772569_v1.jpeg',}}/>

                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe3:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                    <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe3} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>Six Avenue</Text>
                                <Text>Pago de alojamiento $123.320</Text>
                                <Text>A 1.4 Km del centro de la ciudad</Text>
                                <Text>26 habitaciones disponibles</Text>
                                <Text>Telefono: 6831210</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe3:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

                        <Text style={styles.textico}>La Luna</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/27/24/2724682_v2.jpeg',}}/>

                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe4:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe4} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>La Luna</Text>
                                <Text>Pago de alojamiento $296.158</Text>
                                <Text>A 2.8 Km del centro de la ciudad</Text>
                                <Text>21 habitaciones disponibles</Text>
                                <Text>Telefono: 9431351</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe4:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

                        <Text style={styles.textico}>Hotel Torre de Cali Plaza</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/10/33/103353_v13.jpeg',}}/>          

                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe5:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe5} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>Hotel Torre de Cali Plaza</Text>
                                <Text>Pago de alojamiento $164.008</Text>
                                <Text>A 0.7 Km del centro de la ciudad</Text>
                                <Text>30 habitaciones disponibles</Text>
                                <Text>Telefono: 3785286</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe5:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

                        <Text style={styles.textico}>Hotel Dann Cali</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/86/88/868896_v2.jpeg',}}/>

                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe6:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe6} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>Hotel Dann Cali</Text>
                                <Text>Pago de alojamiento $209.234</Text>
                                <Text>A 1.9 Km del centro de la ciudad</Text>
                                <Text>11 habitaciones disponibles</Text>
                                <Text>Telefono: 3112289</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe6:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

                        <Text style={styles.textico}>Hotel Granada Real</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/14/72/1472157_v2.jpeg',}}/>

                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe7:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe7} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>Hotel Granada Real</Text>
                                <Text>Pago de alojamiento $161.324</Text>
                                <Text>A 1.4 Km del centro de la ciudad</Text>
                                <Text>17 habitaciones disponibles</Text>
                                <Text>Telefono: 3025900</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe7:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

                        <Text style={styles.textico}>Hotel Casa Farallones</Text>
                        <Image style={styles.imagenes}
                        source={{uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/16/26/1626883_v4.jpeg',}}/>

                        <View style={styles.botonesHotel}>
                            <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            showMe8:true
                                        })
                                    }}>
                                <Text style={styles.openText}>Detalles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.alquilarText}>Alquilar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Modal visible={this.state.showMe8} animationType="slide" transparent={true}>
                            <View style={styles.modalView}>
                                <Text style={styles.title}>Hotel Casa Farallones</Text>
                                <Text>Pago de alojamiento 145.092</Text>
                                <Text>A 1.8 Km del centro de la ciudad</Text>
                                <Text>19 habitaciones disponibles</Text>
                                <Text>Telefono: 3994711</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        showMe8:false
                                    })
                                }}>
                                    <Text style={styles.closeText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
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
        color: 'black',
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
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black', 
    },
    modalView: {
        backgroundColor: 'white',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 140,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    closeText: {
        backgroundColor: '#333',
        color: '#bbb',
        padding: 5,
        marginTop: 16,
        borderRadius: 5
    },
    openText: {
        backgroundColor: '#333',
        color: '#bbb',
        padding: 5,
        borderRadius: 5,
        margin: 4
    },
    view1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4
    },
    botonesHotel: {
        display: 'flex',
        flexDirection: 'row'
    },
    alquilarText: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 5,
        borderRadius: 5,
        margin: 4
    }
});

export default Hoteles;