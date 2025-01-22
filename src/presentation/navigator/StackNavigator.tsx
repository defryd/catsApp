import { createStackNavigator } from '@react-navigation/stack';
import { CatScreen } from '../screens/cats/CatScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

export type RootStackParams = {
    HomeScreen: undefined;
    CatScreen: { userId: number };
    SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CatScreen" component={CatScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
}