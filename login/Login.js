import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Inputs from './Inputs';

const image = { uri: "https://cdn.needish.com/is-prod-deals/9KuBr5VdYkQsFbi0DPCeGw/scale/900x600.jpg" };

class Login extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View>
                    <Inputs navigation={this.props.navigation}/>
                </View>
            </ImageBackground>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 550
    },
    textico: {
        textAlign: 'center',
        margin: 3,
        fontSize: 16,
        color: 'white'
    },
    image: {
        height: 500,
        alignItems: 'center',
    }    
});

export default Login;