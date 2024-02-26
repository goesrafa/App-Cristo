import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import { Ionicons } from '@expo/vector-icons';

const Sobre = () => {
    const openFacebook = () => {
        Linking.openURL('https://www.facebook.com/paroquiacristoredentor.oficial/')
    }

    const openInsta = () => {
        Linking.openURL('https://www.instagram.com/paroquiacristoredentor.dj?igsh=cTVhd2w1MDlpZW9y')
    }

    const openPhone = () => {
        Linking.openURL('tel:+551145957255')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Redes socias</Text>
            <TouchableOpacity style={styles.Btn} onPress={openFacebook}>
            <Ionicons name="logo-facebook" size={15} color="white" style={styles.icone} />
                <Text style={styles.textBtn}>Paróquia Cristo Redentor</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Btn} onPress={openInsta}>
            <Ionicons name="logo-instagram" size={15} color="white" style={styles.icone} />

                <Text style={styles.textBtn}>Paróquia Cristo Redentor DJ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BtnPhone} onPress={openPhone}>
            <Ionicons name="call" size={15} color="white" style={styles.icone} />
                <Text style={styles.textBtn}>Ligue agora</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Sobre

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        flexGrow: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#237ED1',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold'
        
    },
    Btn:{
        backgroundColor: '#237ED1',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 5,
        top: 15,
    },
    textBtn:{
        color: '#ffff',
        fontSize: 15,
        fontWeight: '500'
    },

    BtnPhone:{
        backgroundColor: '#237ED1',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 5,
        top: 15,
    },

    icone:{
        marginRight: 10,
    }
})