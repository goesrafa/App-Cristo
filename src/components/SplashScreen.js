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
            <Text style={styles.text}>PARÓQUIA CRISTO REDENTOR</Text>
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
    logo: {
        width: '80%',
        height: '80%',
    },
    text: {
        color: '#fff', // Branco
        fontSize: 24,
        marginTop: 20,
    },
});

export default SplashScreen;