import { createStackNavigator } from '@react-navigation/stack';
import { CatScreen } from '../screens/cats/CatScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Breed } from '../../domain/entities/breed';
import SplashScreen from '../screens/SplashScreen';

export type RootStackParams = {
    HomeScreen: undefined;
    CatScreen: { catId: string, cat: Breed };
    SearchScreen: undefined;
    SplashScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
            }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CatScreen" component={CatScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
}