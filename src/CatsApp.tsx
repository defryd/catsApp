import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeContextProvider } from './presentation/context/themeContext';

export const CatsApp = () => {
    return (
        <ThemeContextProvider>
            <StackNavigator />
        </ThemeContextProvider>
    )
}