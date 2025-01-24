import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native'
import { globalTheme } from '../../../config/theme/global-theme';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export const ButtonBack = () => {

    const navigation = useNavigation<any>();
    const { theme } = useContext(ThemeContext);
    
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
            <Text style={[globalTheme.text, { color: theme.varts.text }]}>◀ Back</Text>
        </TouchableOpacity>
    )
}