import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <Text style={styles.text}>PARÓQUIA {'\n'} CRISTO REDENTOR</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#237ED1', // Azul
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
   
    text: {
        color: '#fff', // Branco
        fontSize: 24,
        fontFamily:'Roboto-Regular',
        marginTop: 20,
        top: -10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default SplashScreen;