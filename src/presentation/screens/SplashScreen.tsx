import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,'SplashScreen'>{};

const SplashScreen = ({ navigation }: Props) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeScreen'); // Navega a la pantalla principal después de 3 segundos
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido a Mi Aplicación</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SplashScreen;