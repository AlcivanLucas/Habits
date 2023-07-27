// aqui se difire rotas para o app, como rota para quando o usuario esta logado, não logado ou rota administrativa!

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator(); // Navigator cria o escopo da rota e Screem define onde cada rota leva

import {Habit} from '../screens/Habit';
import {New} from '../screens/New';
import {Home} from '../screens/Home';

export function AppRoutes() {
    // screenOptions esconde o cabeçario da rota
    return(
        <Navigator screenOptions={{headerShown: false}}> 
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="habit"
                component={Habit}
            />
            <Screen
                name="new"
                component={New}
            />
        </Navigator>
    );

}