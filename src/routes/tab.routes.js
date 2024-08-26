import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const Tab =  createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator>
        <Tab.Screen 
            name="Eventos"
            component={Home}
            options={{
                tabBarIcon:({color, size}) => <Feather name='calendar'  color={color} size={size}/>
            }}
            />

        <Tab.Screen 
            name="Favoritos"
            component={Favorites}
            options={{
                tabBarIcon:({color, size}) => <Feather name='star' color={color} size={size}/>
            }}
            />
        </Tab.Navigator>
    )
}