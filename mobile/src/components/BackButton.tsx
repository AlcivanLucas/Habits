// botão de voltar da tela de criação de novos habitos 
import { TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import {useNavigation} from '@react-navigation/native';

export function BackButton() {
    const {goBack} = useNavigation();
    return(
        <TouchableOpacity
            activeOpacity={0.7}  //deixa a opacidade ao tocar no botão mais suave
            onPress={goBack}
        >
            <Feather
                name="arrow-left"
                size={32}
                color={colors.zinc[400]}
                op
            />
        </TouchableOpacity>
    );
}