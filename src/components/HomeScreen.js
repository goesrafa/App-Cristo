import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterIcon from './Footer';

const HomeScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Principal</Text>
      <Text style={styles.date}>Data atual: {currentDate}</Text>
      <View style={styles.footer}>
        <FooterIcon onPress={() => navigation.navigate('Noticias')} />
        <FooterIcon onPress={() => navigation.navigate('Oracoes')} />
        <FooterIcon onPress={() => navigation.navigate('Santos')}  />
        <FooterIcon onPress={() => navigation.navigate('Liturgia')}  />
        <FooterIcon onPress={() => navigation.navigate('Sobre')}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#237ED1',
    paddingVertical: 10,
  },
});

export default HomeScreen;