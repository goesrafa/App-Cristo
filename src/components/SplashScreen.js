/*import React, { useState, useNavigation } from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import CadastroEmail from './CadastroEmail';

const SplashScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <Button title='Cadastre-se' onPress={() => setModalVisible(true)} />
            <CadastroEmail visible={modalVisible} onClose={() => setModalVisible(false)} />
            
            <Button title="Entrar" onPress={() => navigation.navigate('Noticia')}/>

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
        
        marginTop: 20,
        top: -10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default SplashScreen;*/