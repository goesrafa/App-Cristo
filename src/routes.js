import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Noticia from './pages/Noticia/Noticias';
import Oracoes from './pages/Oracoes/Oracoes';
import Santos from './pages/Santos/Santos';
import Liturgia from './pages/Liturgia/Liturgia';
import Sobre from './pages/Sobre/Sobre';

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#237ED1',
                borderTopWidth: 0,
                color:'white',
                bottom: 14,
                left: 14,
                right: 14,
                elevation: 0,
                borderRadius: 8,
                height: 55,
            }
        }}>
            
            <Tab.Screen 
            name='Orações' 
            component={Oracoes} 
            options={{
                headerShown: true,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <MaterialCommunityIcons name="hands-pray" size={size} color={color} />
                    }

                    return <MaterialCommunityIcons name="hands-pray" size={24} color="white" />
                }
            }}
            />
            <Tab.Screen name='Santos' component={Santos} 
            options={{
                headerShown: true,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <MaterialCommunityIcons name="cross"  size={size} color={color} />
                    }

                    return <MaterialCommunityIcons name="cross"  size={size} color="white" />
                }
            }}
            
            />
            <Tab.Screen name='Liturgia' component={Liturgia} 
            options={{
                headerShown: true,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <MaterialCommunityIcons name="book-cross"  size={size} color={color} />
                    }

                    return <MaterialCommunityIcons name="book-cross"  size={size} color="white" />
                }
            }}
            />
            <Tab.Screen
            name='Sobre'
            component={Sobre} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="information-circle-outline" size={size} color={color} />
                    }

                    return <Ionicons name="information-circle-outline" size={size} color="white" />
                }
            }}
            />

        </Tab.Navigator>
    )
}

export default Routes;