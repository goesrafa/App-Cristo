import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { View, Modal, Text, TextInput, Button, StyleSheet } from "react-native";

const CadastroEmail = ({visible, onClose}) => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

   /* const handleConfirm = ({navigation}) => {
      navigation.navigate('Noticia');
        console.log(email);
        onClose();
    }*/

    return(
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.label}>Email: </Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                    <Button title="Cadastrar" onPress={() => navigation.navigate('HomeScreen')} />
                    
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  });
  
  export default CadastroEmail;