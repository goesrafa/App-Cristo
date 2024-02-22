import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import SplashScreen from './src/components/SplashScreen';
import HomeScreen from "./src/components/HomeScreen";
import Noticia from "./src/components/Noticias";
import Oracoes from "./src/components/Oracoes";
import Santos from "./src/components/Santos";
import Liturgia from "./src/components/Liturgia";
import Sobre from "./src/components/Sobre";

const Tab = createBottomTabNavigator();


const App = () => {
  const [splashVisible, setSplashVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // Altere o tempo conforme necessário
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        
        <Tab.Screen name="Noticias" component={Noticia} options={{ headerShown: false }} />
        <Tab.Screen name="Oracoes" component={Oracoes} options={{ headerShown: false }} />
        <Tab.Screen name="Santos" component={Santos} options={{ headerShown: false }} />
        <Tab.Screen name="Liturgia" component={Liturgia} options={{ headerShown: false }} />
        <Tab.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;