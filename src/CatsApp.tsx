import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeContextProvider } from './presentation/context/themeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export const CatsApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeContextProvider>
                <StackNavigator />
            </ThemeContextProvider>
        </QueryClientProvider>
    )
}